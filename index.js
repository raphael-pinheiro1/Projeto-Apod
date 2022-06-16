$("form").submit(false)
$("#btn").on("click",function(){
    var dados =$("#date_id").val()
    // var url = `https://api.nasa.gov/planetary/apod?api_key=6138Xz1a5zTGmcrNq0SOKlTN7udAuQ205f0CnsUU&${data}`
    let url = `https://api.nasa.gov/planetary/apod?api_key=gWnsyTlLJ3RW2k5DRn9LOthZozQjLT55lBqeltsy&date=${dados}`

    $.ajax({
        url: url,
        type: "get",

        success: function(dados){

            $("#text").text(dados.title)
            $("#imagem_id").attr('src', dados.url)
            $("#paragrafo_id").text(dados.explanation)
            if(dados.media_type == 'image') {
              $('#imagem_id').attr('src', dados.url).show()
              $("#video").hide()
            } else if(dados.media_type == 'video') {
              $("#video").attr('src', info.url).show()
              $("#imagem_id").hide()
            }
          },

          error: function error() {
            alert("Lagou aqui, lagou aí?")
          }
        
    })
})
