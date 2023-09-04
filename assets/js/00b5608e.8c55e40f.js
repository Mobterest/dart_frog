"use strict";(self.webpackChunkdart_frog_docs=self.webpackChunkdart_frog_docs||[]).push([[770],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>h});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var u=a.createContext({}),l=function(e){var t=a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=l(e.components);return a.createElement(u.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,u=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),c=l(n),h=r,m=c["".concat(u,".").concat(h)]||c[h]||p[h]||o;return n?a.createElement(m,i(i({ref:t},d),{},{components:n})):a.createElement(m,i({ref:t},d))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=c;var s={};for(var u in t)hasOwnProperty.call(t,u)&&(s[u]=t[u]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var l=2;l<o;l++)i[l]=n[l];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},5629:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>i,default:()=>p,frontMatter:()=>o,metadata:()=>s,toc:()=>l});var a=n(7462),r=(n(7294),n(3905));const o={sidebar_position:6,title:"\ud83e\udeaa  Authentication with JWT",description:"Build an authenticated dart frog service."},i="Authentication with JWT \ud83e\udeaa",s={unversionedId:"tutorials/jwt_authentication",id:"tutorials/jwt_authentication",title:"\ud83e\udeaa  Authentication with JWT",description:"Build an authenticated dart frog service.",source:"@site/docs/tutorials/jwt_authentication.md",sourceDirName:"tutorials",slug:"/tutorials/jwt_authentication",permalink:"/docs/tutorials/jwt_authentication",draft:!1,editUrl:"https://github.com/VeryGoodOpenSource/dart_frog/tree/main/docs/docs/tutorials/jwt_authentication.md",tags:[],version:"current",sidebarPosition:6,frontMatter:{sidebar_position:6,title:"\ud83e\udeaa  Authentication with JWT",description:"Build an authenticated dart frog service."},sidebar:"docs",previous:{title:"\ud83d\udd0c WebSocket Counter",permalink:"/docs/tutorials/web_socket_counter"},next:{title:"Deploy",permalink:"/docs/category/deploy"}},u={},l=[{value:"Overview",id:"overview",level:2},{value:"Creating a new app",id:"creating-a-new-app",level:2},{value:"Running the development server",id:"running-the-development-server",level:2},{value:"The hardcode domain code",id:"the-hardcode-domain-code",level:2},{value:"Writing a Sign In route",id:"writing-a-sign-in-route",level:2},{value:"Requiring authentication to access routes",id:"requiring-authentication-to-access-routes",level:2},{value:"Protecting the authentication token",id:"protecting-the-authentication-token",level:2}],d={toc:l};function p(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"authentication-with-jwt-"},"Authentication with JWT \ud83e\udeaa"),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},(0,r.kt)("strong",{parentName:"p"},"Difficulty"),": \ud83d\udfe0 Intermediate",(0,r.kt)("br",null),"\n",(0,r.kt)("strong",{parentName:"p"},"Length"),": 30 minutes"),(0,r.kt)("p",{parentName:"admonition"},"Before getting started, ",(0,r.kt)("a",{parentName:"p",href:"/docs/overview#prerequisites"},"read the Dart Frog prerequisites")," to make sure your development environment is ready.")),(0,r.kt)("h2",{id:"overview"},"Overview"),(0,r.kt)("p",null,"In this tutorial, we're going to build an app that exposes endpoints accessible only to users\nthat have been authenticated."),(0,r.kt)("p",null,"When we're done, we should be able to authenticate with a user credentials, and access the\nprotected routes."),(0,r.kt)("p",null,"Like mentioned in the ",(0,r.kt)("a",{parentName:"p",href:"https://dartfrog.vgv.dev/docs/advanced/authentication"},"Dart Frog Authentication documentation"),",\nthere are many ways of implementing authentication in a backend, for this tutorial we will use a\nhardcoded, in memory, database of users and ",(0,r.kt)("a",{parentName:"p",href:"https://jwt.io/"},"JSON Web Tokens")," (or for short JWTs)\nfor the user's authentication token."),(0,r.kt)("h2",{id:"creating-a-new-app"},"Creating a new app"),(0,r.kt)("p",null,"To create a new Dart Frog app, open your terminal, change to the directory where you'd like to create the app, and run the following command:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"dart_frog create authenticated_app\n")),(0,r.kt)("p",null,"You should see an output similar to:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"\u2713 Creating authenticated_app (0.1s)\n\u2713 Installing dependencies (1.7s)\n\nCreated authenticated_app at ./authenticated_app.\n\nGet started by typing:\n\ncd ./authenticated_app\ndart_frog dev\n")),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"Install and use the ",(0,r.kt)("a",{parentName:"p",href:"https://marketplace.visualstudio.com/items?itemName=VeryGoodVentures.dart-frog"},"Dart Frog VS Code extension")," to easily create Dart Frog apps within your IDE.")),(0,r.kt)("h2",{id:"running-the-development-server"},"Running the development server"),(0,r.kt)("p",null,"You should now have a directory called ",(0,r.kt)("inlineCode",{parentName:"p"},"authenticated_app"),". Let's change directories into the newly created project:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"cd authenticated_app\n")),(0,r.kt)("p",null,"Then, run the following command:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"dart_frog dev\n")),(0,r.kt)("p",null,"This will start the development server on port ",(0,r.kt)("inlineCode",{parentName:"p"},"8080"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"\u2713 Running on http://localhost:8080 (1.3s)\nThe Dart VM service is listening on http://127.0.0.1:8181/YKEF_nbwOpM=/\nThe Dart DevTools debugger and profiler is available at: http://127.0.0.1:8181/YKEF_nbwOpM=/devtools/#/?uri=ws%3A%2F%2F127.0.0.1%3A8181%2FYKEF_nbwOpM%3D%2Fws\n[hotreload] Hot reload is enabled.\n")),(0,r.kt)("p",null,"Make sure it's working by opening ",(0,r.kt)("a",{parentName:"p",href:"http://localhost:8080"},"http://localhost:8080")," in your browser or via ",(0,r.kt)("inlineCode",{parentName:"p"},"cURL"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"curl --request GET \\\n  --url http://localhost:8080\n")),(0,r.kt)("p",null,"If everything succeeded, you should see ",(0,r.kt)("inlineCode",{parentName:"p"},"Welcome to Dart Frog!"),"."),(0,r.kt)("h2",{id:"the-hardcode-domain-code"},"The hardcode domain code"),(0,r.kt)("p",null,"To keep the tutorial simple and focused on authentication, our database of users will be hardcoded and\nthe ",(0,r.kt)("inlineCode",{parentName:"p"},"User")," model will be simple, containing just an id and a name."),(0,r.kt)("p",null,"For next steps, use the code below to create the domain classes."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-dart"},"// lib/user.dart\nclass User {\n  const User({\n    required this.id,\n    required this.name,\n    required this.password,\n  });\n\n  final String id;\n  final String name;\n  final String password;\n}\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-dart"},"// lib/authenticator.dart\nimport 'package:authenticated_app/user.dart';\n\nclass Authenticator {\n  static const _users = {\n    'john': User(\n      id: '1',\n      name: 'John',\n      password: '123',\n    ),\n    'jack': User(\n      id: '2',\n      name: 'Jack',\n      password: '321',\n    ),\n  };\n\n  static const _passwords = {\n    // \u26a0\ufe0f Never store user's password in plain text, these values are in plain text\n    // just for the sake of the tutorial.\n    'john': '123',\n    'jack': '321',\n  };\n\n  User? findByUsernameAndPassword({\n    required String username,\n    required String password,\n  }) {\n    final user = _users[username];\n\n    if (user != null && _passwords[username] == password) {\n      return user;\n    }\n\n    return null;\n  }\n}\n\n")),(0,r.kt)("p",null,"We also need to provide our ",(0,r.kt)("inlineCode",{parentName:"p"},"Authenticator")," to our routes. It will be used by the sign in route and all others that\nrequire authentication."),(0,r.kt)("p",null,"In order to do so, we can use ",(0,r.kt)("a",{parentName:"p",href:"https://dartfrog.vgv.dev/docs/basics/dependency-injection"},"Dart frog's dependency injection"),"\nand create a middleware in the root of our ",(0,r.kt)("inlineCode",{parentName:"p"},"routes")," folder with the following code:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-dart"},"// lib/_middleware.dart\nimport 'package:authenticated_app/authenticator.dart';\nimport 'package:dart_frog/dart_frog.dart';\n\nHandler middleware(Handler handler) {\n  return handler.use(\n    provider<Authenticator>(\n      (_) => Authenticator(),\n    ),\n  );\n}\n")),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"Install and use the ",(0,r.kt)("a",{parentName:"p",href:"https://marketplace.visualstudio.com/items?itemName=VeryGoodVentures.dart-frog"},"Dart Frog VS Code extension")," to easily create new middleware within your IDE.")),(0,r.kt)("h2",{id:"writing-a-sign-in-route"},"Writing a Sign In route"),(0,r.kt)("p",null,"Now that we have all the domain code necessary to authenticate users given an username and a password, we can create a route to authenticate users. Within the routes folder, create the file below:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-dart"},"// routes/sign_in.dart\nimport 'dart:io';\n\nimport 'package:authenticated_app/authenticator.dart';\nimport 'package:dart_frog/dart_frog.dart';\n\nFuture<Response> onRequest(RequestContext context) async {\n  return switch (context.request.method) {\n    HttpMethod.post => _onPost(context),\n    _ => Future.value(\n        Response(statusCode: HttpStatus.methodNotAllowed),\n      ),\n  };\n}\n\nFuture<Response> _onPost(RequestContext context) async {\n  final body = await context.request.json() as Map<String, dynamic>;\n  final username = body['username'] as String?;\n  final password = body['password'] as String?;\n\n  if (username == null || password == null) {\n    return Response(statusCode: HttpStatus.badRequest);\n  }\n\n  final authenticator = context.read<Authenticator>();\n\n  final user = authenticator.findByUsernameAndPassword(\n    username: username,\n    password: password,\n  );\n\n  if (user == null) {\n    return Response(statusCode: HttpStatus.unauthorized);\n  } else {\n    return Response.json(\n      body: { 'token': username },\n    );\n  }\n}\n")),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"Install and use the ",(0,r.kt)("a",{parentName:"p",href:"https://marketplace.visualstudio.com/items?itemName=VeryGoodVentures.dart-frog"},"Dart Frog VS Code extension")," to easily create new routes within your IDE.")),(0,r.kt)("p",null,"To people familiar with Dart Frog, the code above should be no real challenge, we are simply handling the\nrequest in the following steps:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Check if we have all the info needed, returning ",(0,r.kt)("inlineCode",{parentName:"li"},"badRequest")," otherwise."),(0,r.kt)("li",{parentName:"ul"},"Get our ",(0,r.kt)("inlineCode",{parentName:"li"},"Authenticator")," dependency from our dependency injection."),(0,r.kt)("li",{parentName:"ul"},"Use the ",(0,r.kt)("inlineCode",{parentName:"li"},"Authenticator")," to get a user that match the request's credential."),(0,r.kt)("li",{parentName:"ul"},"Return an ",(0,r.kt)("inlineCode",{parentName:"li"},"unauthorized")," (401) if there is no user, or return the user username as the authentication token otherwise.")),(0,r.kt)("p",null,"Using the username as an authentication token is quite unsafe. Malicious hackers could easily modify messages with usernames to break through our security and impersonate someone else. For the sake of simplicity, we'll finish off using this simple authentication setup before introducing JWT, a more complex security method."),(0,r.kt)("p",null,"Try now running a ",(0,r.kt)("inlineCode",{parentName:"p"},"curl")," in the terminal to get a token:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'curl -X POST \\\n     -H "Content-Type: application/json" \\\n     -d \'{"username": "john", "password": "123"}\'  \\\n     http://localhost:8080/sign_in\n\n# {"token":"john"}\n')),(0,r.kt)("h2",{id:"requiring-authentication-to-access-routes"},"Requiring authentication to access routes"),(0,r.kt)("p",null,"Now that we have the means to get an authentication token, we can now protect routes by requiring a token to access them."),(0,r.kt)("p",null,"To start, let's create the following route:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-dart"},"// routes/tasks/index.dart\nimport 'dart:io';\n\nimport 'package:dart_frog/dart_frog.dart';\n\nFuture<Response> onRequest(RequestContext context) {\n  return switch (context.request.method) {\n    HttpMethod.post => _onPost(context),\n    _ => Future.value(Response(statusCode: HttpStatus.methodNotAllowed)),\n  };\n}\n\nFuture<Response> _onPost(RequestContext context) async {\n  final task = await context.request.body();\n  return Response.json(\n    body: {\n      'recorded_task': task,\n    },\n  );\n}\n")),(0,r.kt)("p",null,"This route doesn't do much for now, it just reads the request and answers with a body that includes the\nreceived task name. In addition, it is yet to be protected."),(0,r.kt)("p",null,"To protect our route, we will use ",(0,r.kt)("a",{parentName:"p",href:"https://pub.dev/packages/dart_frog_auth"},(0,r.kt)("inlineCode",{parentName:"a"},"dart_frog_auth")),", a\npackage provided by Dart Frog that makes it easier to implement token based authentications."),(0,r.kt)("p",null,"So let's start by adding it to the project:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"dart pub add dart_frog_auth\n")),(0,r.kt)("p",null,"First, we need to create a method in our ",(0,r.kt)("inlineCode",{parentName:"p"},"Authenticator")," class which will be responsible of validating\nan authentication token. Since for now, our authentication token is just the username,\nwe can add the following snippet to the ",(0,r.kt)("inlineCode",{parentName:"p"},"Authenticator")," class:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-dart"},"  User? verifyToken(String username) {\n    return _users[username];\n  }\n")),(0,r.kt)("p",null,"If the token is valid, the user will be returned, otherwise, the method will return ",(0,r.kt)("inlineCode",{parentName:"p"},"null"),"."),(0,r.kt)("p",null,"Next, lets create the following middleware under ",(0,r.kt)("inlineCode",{parentName:"p"},"routes/tasks"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-dart"},"// lib/routes/tasks/_middleware.dart\nimport 'package:authenticated_app/authenticator.dart';\nimport 'package:authenticated_app/user.dart';\nimport 'package:dart_frog/dart_frog.dart';\nimport 'package:dart_frog_auth/dart_frog_auth.dart';\n\nHandler middleware(Handler handler) {\n  return handler.use(\n    bearerAuthentication<User>(\n      authenticator: (context, token) async {\n        final authenticator = context.read<Authenticator>();\n        return authenticator.verifyToken(token);\n      },\n    ),\n  );\n}\n")),(0,r.kt)("p",null,"This middleware is adding a Bearer Token authentication for all requests incoming within the ",(0,r.kt)("inlineCode",{parentName:"p"},"tasks")," namespace."),(0,r.kt)("p",null,"The usage of the ",(0,r.kt)("inlineCode",{parentName:"p"},"bearerAuthentication")," middleware, which is provided by ",(0,r.kt)("inlineCode",{parentName:"p"},"dart_frog_auth"),", is quite simple.\nWe need to provide a function that returns a user if the token is valid and belongs to a user; or null otherwise."),(0,r.kt)("p",null,"This middleware will automatically return an ",(0,r.kt)("inlineCode",{parentName:"p"},"unauthorized")," (401) response to incoming requests when\nno valid tokens are provided. So, if we go ahead and try the following command in our terminal:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'# Note the additional `-v`, so we can see the status code in the output\ncurl -d "Buy bread" \\\n     -v \\\n     http://localhost:8080/tasks\n')),(0,r.kt)("p",null,"We should see the following line in the output:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"< HTTP/1.1 401 Unauthorized\n")),(0,r.kt)("p",null,"But if we inform a valid and correct authentication token:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'curl -d "Buy bread" \\\n     -v \\\n     -H "Authorization: Bearer john" \\\n     http://localhost:8080/tasks\n')),(0,r.kt)("p",null,"Then the correct response of that route should be the output:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'{"recorded_task":"Buy bread"}\n')),(0,r.kt)("p",null,"Additionally, the ",(0,r.kt)("inlineCode",{parentName:"p"},"bearerAuthentication")," middleware will provide the returned user in the request context,\nso any route handlers affected by it, will already have access to the user that is currently authenticated."),(0,r.kt)("p",null,"With that information, we can change our tasks routes to have a more interesting response:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-dart"},"// routes/tasks/index.dart\nimport 'dart:io';\n\nimport 'package:authenticated_app/user.dart';\nimport 'package:dart_frog/dart_frog.dart';\n\nFuture<Response> onRequest(RequestContext context) {\n  return switch (context.request.method) {\n    HttpMethod.post => _onPost(context),\n    _ => Future.value(Response(statusCode: HttpStatus.methodNotAllowed)),\n  };\n}\n\nFuture<Response> _onPost(RequestContext context) async {\n  final task = await context.request.body();\n  final user = context.read<User>();\n\n  return Response.json(\n    body: {\n      'recorded_task': task,\n      'user_id': user.id,\n    },\n  );\n}\n")),(0,r.kt)("h2",{id:"protecting-the-authentication-token"},"Protecting the authentication token"),(0,r.kt)("p",null,"This is a good point to review what we have done so far:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"We have created a sign in route, where credentials can be posted, and an authentication token\nis returned if valid."),(0,r.kt)("li",{parentName:"ul"},"We have routes that can only be accessed if an authentication token is sent in the request.")),(0,r.kt)("p",null,"However, as we noticed in the steps before, our authentication token is quite unsafe, it is nothing\nmore than the username. Meaning that if a malicious hacker guesses another\nusername, which is not something hard to do. This would allow the hacker to impersonate the user and perform bad actions, such as stealing information."),(0,r.kt)("p",null,"To avoid that, we have to make our tokens in a way where they cannot be faked, guessed or tampered.\nThere are many methods of doing so, in this tutorial, we will use JWT, a widely used standard in the\nindustry to secure issued tokens. This tutorial will not go much in deep on how JWT tokens work\nunder the hood, so to get a better understanding on how they work, be sure to check their official\n",(0,r.kt)("a",{parentName:"p",href:"https://jwt.io/"},"documentation"),"."),(0,r.kt)("p",null,"Right, given this brief introduction, let's get to it! Luckily, the Dart ecosystem already has\na handy package that makes it easy to work with JWT tokens. We can start by adding that dependency to our\nproject:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-dart"},"dart pub add dart_jsonwebtoken\n")),(0,r.kt)("p",null,"Next, add the following method to our ",(0,r.kt)("inlineCode",{parentName:"p"},"Authenticator")," class:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-dart"},"  String generateToken({\n    required String username,\n    required User user,\n  }) {\n    final jwt = JWT(\n      {\n        'id': user.id,\n        'name': user.name,\n        'username': username,\n      },\n    );\n\n    return jwt.sign(SecretKey('123'));\n  }\n")),(0,r.kt)("p",null,"This new method takes care of generating a JWT token. Note that we ",(0,r.kt)("inlineCode",{parentName:"p"},"sign")," out the token by\npassing a secret key, as the name implies, this key is secret and should be kept as such. For the scope of this\ntutorial we are keeping it hard coded. Nonetheless, in a real case application,\nbe sure to correctly store it and pass it to the code in a way where then will remain secret to outsiders."),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"Environments variables are a great way of injecting secrets into you Dart Frog application. Check ",(0,r.kt)("a",{parentName:"p",href:"https://dartfrog.vgv.dev/docs/basics/environments"},"this guide")," to learn more about them.")),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"sign")," method will create a signature out of the data we passed to it, and it will be part\nof the token. This technique will allow us to check if an authentication token that we've received\nis valid and if it hasn't been tampered!"),(0,r.kt)("p",null,"Alright, now we need to update our ",(0,r.kt)("inlineCode",{parentName:"p"},"/sign_in")," route. It should no longer return the user's username, but instead, the token created by the ",(0,r.kt)("inlineCode",{parentName:"p"},"generateToken")," method. The route should now look like this:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-dart"},"// routes/tasks/sign_in.dart\nimport 'dart:io';\n\nimport 'package:authenticated_app/authenticator.dart';\nimport 'package:dart_frog/dart_frog.dart';\n\nFuture<Response> onRequest(RequestContext context) async {\n  return switch (context.request.method) {\n    HttpMethod.post => _onPost(context),\n    _ => Future.value(\n        Response(statusCode: HttpStatus.methodNotAllowed),\n      ),\n  };\n}\n\nFuture<Response> _onPost(RequestContext context) async {\n  final body = await context.request.json() as Map<String, dynamic>;\n  final username = body['username'] as String?;\n  final password = body['password'] as String?;\n\n  if (username == null || password == null) {\n    return Response(statusCode: HttpStatus.badRequest);\n  }\n\n  final authenticator = context.read<Authenticator>();\n\n  final user = authenticator.findByUsernameAndPassword(\n    username: username,\n    password: password,\n  );\n\n  if (user == null) {\n    return Response(statusCode: HttpStatus.unauthorized);\n  } else {\n    return Response.json(\n      body: {\n        'token': authenticator.generateToken(\n          username: username,\n          user: user,\n        ),\n      },\n    );\n  }\n}\n")),(0,r.kt)("p",null,"Finally, we now need to change the ",(0,r.kt)("inlineCode",{parentName:"p"},"Authenticator")," to verify the newly signed token, instead of just\nchecking against a user's username."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-dart"},"  User? verifyToken(String token) {\n    try {\n      final payload = JWT.verify(\n        token,\n        SecretKey('123'),\n      );\n\n      final payloadData = payload.payload as Map<String, dynamic>;\n\n      final username = payloadData['username'] as String;\n      return _users[username];\n    } catch (e) {\n      return null;\n    }\n  }\n")),(0,r.kt)("p",null,"And that is it, with the addition of a signed token, if someone tampers the information stored in it,\nor tries to forge a token without knowing the secret key, the authentication will fail; only real authenticated users will be able to access protected routes!"),(0,r.kt)("p",null,"\ud83c\udf89 Congratulations, you've created an application using Dart Frog with authentication."))}p.isMDXComponent=!0}}]);