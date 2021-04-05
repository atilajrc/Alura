//var filme1 = "Star Wars"
//var filme2 = "Toy Story"
//var filme3 = "Interstellar"

//var filmes = []

//filmes.push("Star Wars")
//filmes.push("Toy Story")
//filmes.push("Interstellar")
//filmes.push("O Corvo")

//console.log(filmes[0])
//console.log(filmes[2])

//console.log(filmes.length)

//for (var i = 0; i < filmes.length; i++){
//  console.log(filmes[i])
//}
var nomeFilmes = ["Matrix", "O Corvo", "Star Wars"]

var trailerFilmes = ["https://www.youtube.com/watch?v=2KnZac176Hs", "https://www.youtube.com/watch?v=GQK42d-7gRo", "https://www.youtube.com/watch?v=GLaBPcbxFFs"]

var capaFilmes = ["https://m.media-amazon.com/images/M/MV5BNzQzOTk3OTAtNDQ0Zi00ZTVkLWI0MTEtMDllZjNkYzNjNTc4L2ltYWdlXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_UX182_CR0,0,182,268_AL_.jpg", "https://m.media-amazon.com/images/M/MV5BM2Y4ZGVhZjItNjU0OC00MDk1LWI4ZTktYTgwMWJkNDE5OTcxXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_UX182_CR0,0,182,268_AL_.jpg", "https://m.media-amazon.com/images/M/MV5BNTc4MTc3NTQ5OF5BMl5BanBnXkFtZTcwOTg0NjI4NA@@._V1_UY268_CR9,0,182,268_AL_.jpg"]

for (var i = 0; i < nomeFilmes.length; i++){
 document.write("<a href=" + trailerFilmes[i] + ' target="_blank"><img src=' + capaFilmes[i] + ' alt="" class=""></a> '+ "<p>" + nomeFilmes[i] + "</p>");
}
