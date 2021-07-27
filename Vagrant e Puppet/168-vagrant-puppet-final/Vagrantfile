#vagrant plugin install vagrant-aws
#vagrant box add --force dummy https://github.com/mitchellh/vagrant-aws/raw/master/dummy.box
#vagrant up aws_web --provider=aws
#vagrant destroy -f aws_web 

Vagrant.configure("2") do |config|

  config.vm.provider "virtualbox"
  config.vm.provider "aws"

  config.vm.provider :aws do |aws, override|

    #dados do access key
    aws.access_key_id = "sua chave"
    aws.secret_access_key = "seu secret"

    #a identificacao da AMI, abaixo é Ubuntu 18.04
    aws.ami = "ami-0ac019f4fcb7cb7e6"

    #nome do security group
    aws.security_groups = ['devops-vagrant']

    #nome do arquivo pem
    aws.keypair_name = "key-devops-vagrant"

    #nome do usuario, no caso do Ubuntu é ubuntu
    override.ssh.username = "ubuntu"

    #caminho e nome do arquivo pem
    override.ssh.private_key_path = "key-devops-vagrant.pem"
  end

  #novo ambiente aws_web, agora com puppet
  config.vm.define :aws_web do |aws_web_config|

    aws_web_config.vm.box = "dummy"
    aws_web_config.vm.synced_folder '.', '/vagrant', type: "rsync"

    aws_web_config.vm.provider :aws do |aws|
    	aws.tags = { 'Name' => 'MusicJungle (vagrant)'}
    end

    ## shell e puppet provisioner
    aws_web_config.vm.provision "shell", path: "manifests/bootstrap.sh"
    aws_web_config.vm.provision "puppet" do |puppet|
       puppet.manifest_file = "web.pp"
       puppet.synced_folder_type = 'rsync'
    end
  end

  config.vm.define :web do |web_config|
    #usando ubuntu 18.04
    web_config.vm.box = "ubuntu/bionic64"
    web_config.vm.network "private_network", ip: "192.168.50.10"
    web_config.vm.provision "shell", path: "manifests/bootstrap.sh"
    web_config.vm.provision "puppet" do |puppet|
      puppet.manifest_file = "web.pp"
    end
  end

end
