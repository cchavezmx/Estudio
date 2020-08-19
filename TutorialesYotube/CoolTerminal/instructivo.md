// Para instalar un tema que se vea bonito con windows TERMINAL y sea amigable con GIT



//// PASOS ///

Descargar Windows Terminal => from Store

Get PowerLine Font
    GitHub Proyecto de Cascadia Font

Modificar => settings.json in terminal 
    Bajo la linea default agregar lo siguiente: 

        "defaults":
        {
            // Put settings here that you want to apply to all profiles.
            "fontFace": "Cascadian Code PL",
            "fontSize": 16
        },

tambien se deben agregar las siguientes lineas... al archivo de profile
                echo $Profile <== para ver la ruta del profile>


                    Import-Module posh-git
                    Import-Module oh-my-posh
                    Set-Team Paradox


Instalar los siguientes modulos
❯ install-module posh-git -scope  CurrentUser
  install-module oh-my-posh -scope  CurrentUser


