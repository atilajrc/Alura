exec { "apt-update":
	command => "/usr/bin/apt-get update"
}

package { ["vim", "openjdk-8-jre", "tomcat8", "mariadb-server"]:
	ensure => installed,
	require => Exec["apt-update"]
}

service { "mariadb":
    ensure => running,
    enable => true,
    hasstatus => true,
    hasrestart => true,
    require => Package["mariadb-server"]
}

exec { "musicjungle":
    command => "mysqladmin -uroot create musicjungle",
    unless => "mysql -u root musicjungle",
    path => "/usr/bin",
    require => Service["mariadb"]
}

exec { "user_mariadb":
    command => "/bin/echo \"CREATE USER 'admin'@'localhost';GRANT USAGE on *.* TO 'admin'@'localhost';GRANT ALL privileges ON musicjungle.* TO  'admin'@'localhost';FLUSH PRIVILEGES;\" |  /usr/bin/mysql -u root",
    require => Exec["musicjungle"]
}

service { "tomcat8":
	ensure => running,
	enable => true,
	hasstatus => true,
	hasrestart => true,
	require => Package["tomcat8"]
}

file { "/var/lib/tomcat8/webapps/vraptor-musicjungle.war":
	source => "/vagrant/manifests/vraptor-musicjungle.war",
	owner => "tomcat8",
	group => "tomcat8",
	mode => "0644",
	require => Package["tomcat8"],
	notify => Service["tomcat8"]
}

file_line { "production":
    path => "/etc/default/tomcat8",
    line => "JAVA_OPTS=\"\$JAVA_OPTS -Dbr.com.caelum.vraptor.environment=production\"",
    require => Package["tomcat8"],
    notify => Service["tomcat8"]
}
