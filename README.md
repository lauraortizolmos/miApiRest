# Mi Api Rest.
Esta practica es el desarrollo de una REST Api con Nodejs y Mysql, lo que permite acceder a los datos desde cualquier aplicación, como puede ser aplicaciones web, aplicaciones moviles o cualquier otro tipo de aplicación cliente.
Para tener acceso a la Api Rest se utilizo un cliente rest llamado "Postman", para poder realizar las operaciones
basicas de Api Rest (Get, Post, Put, Delete) se utilizo la ruta "localhost".
Las operaciones que se realizaron en estos datos (Get, Post, Put, Delete) se lograron gracias a un procedimiento almacenado, con este procedimiento se pudieron realizar las operaciones de una manera mas sencilla en el Cliente Rest "Postman". 

# Api Rest.
REST es el estándar más lógico, eficiente y habitual en la creación de APIs para servicios de Internet.
REST es cualquier interfaz entre sistemas que use HTTP para obtener datos o generar operaciones sobre esos datos en todos los formatos posibles, como XML y JSON. Es una alternativa en auge a otros protocolos estándar de intercambio de datos como SOAP (Simple Object Access Protocol), que disponen de una gran capacidad pero también mucha complejidad. 
Hoy en día las API REST están en un gran apogeo ya que la mayoría hace uso de esta tecnología para poder como menciono, enviar y recibir datos de forma sencilla y rápida, aunque una tecnología que está en crecimiento es el GraphQL que busca reemplazar a las API REST para hacerlas aún más sencillas y a la vez más robustas.
Las API REST aprovechan los métodos HTTP, desde un simple POST o GET hasta métodos personalizados, sin embargo, nosotros veremos únicamente POST, GET, PUT y DELETE en su forma más sencilla y las Headers que son para autenticación, decirle qué tipo de dato va.

# Caracteristicas Rest.
* Protocolo cliente/servidor sin estado: cada petición HTTP contiene toda la información necesaria para ejecutarla, lo que permite que ni cliente ni servidor necesiten recordar ningún estado previo para satisfacerla. Aunque esto es así, algunas aplicaciones HTTP incorporan memoria caché. 
* Las operaciones más importantes relacionadas con los datos en cualquier sistema REST y la especificación HTTP son cuatro: POST (crear), GET (leer y consultar), PUT (editar) y DELETE (eliminar).
* Los objetos en REST siempre se manipulan a partir de la URI. 
* Interfaz uniforme.
* Sistema de capas: arquitectura jerárquica entre los componentes.

# Postman.
Postman es una extensión del navegador Google Chrome, que permite el envío de peticiones HTTP REST sin necesidad de desarrollar un cliente.
El interés fundamental de Postman es que lo utilicemos como una herramienta
para hacer peticiones a APIs y generar colecciones de peticiones que nos permitan probarlas de una manera rápida y sencilla.
Las colecciones son carpetas donde se almacenan las peticiones y que permiten ser estructuradas por recursos, módulos o como el equipo lo desee.

# Nodejs.
Es un entorno de tiempo de ejecución de JavaScript (de ahí su terminación en .js haciendo alusión al lenguaje JavaScript). Este entorno de tiempo de ejecución en tiempo real incluye todo lo que se necesita para ejecutar un programa escrito en JavaScript. La idea principal de Node.js es usar el modelo de entrada y salida sin bloqueo y controlado por eventos para seguir siendo liviano y eficiente frente a las aplicaciones en tiempo real de uso de datos que se ejecutan en los dispositivos. Es una plataforma que no dominará el mundo del desarrollo web pero si que satisface las necesidades de una gran mayoría de programadores.

# Mysql FreeHosting.
Todas las páginas y blogs que se muestran en la red han de tener un dominio y un hosting. El dominio es el nombre que va a tener la web en Internet, y el hosting es el espacio o el lugar en el que vas a alojar tu página, por lo que también es conocido como alojamiento web. Existen diferentes tipos de hosting y se diferencian en el espacio de almacenamiento o en si son de pago o gratuitos.
FreeMysqlHosting es un alojamiento web gratuito que con solo registarse te permite tener acceso a una base de datos remota. En este freehosting no pagaras nada, y si tienes más de un correo electrónico, puedes crearte varias cuentas y disponer de varios planes de hosting gratuito a la vez.

# Resultado
![Get](https://user-images.githubusercontent.com/61463784/81897732-d9284600-957c-11ea-91ad-211c9250dc43.png)
![Post](https://user-images.githubusercontent.com/61463784/81897741-daf20980-957c-11ea-87f7-18508ce715d1.png)
![Put](https://user-images.githubusercontent.com/61463784/81897748-dd546380-957c-11ea-9757-58440d3ca48b.png)
![Delete](https://user-images.githubusercontent.com/61463784/81897755-df1e2700-957c-11ea-9dbb-ccb49facaf16.png)
