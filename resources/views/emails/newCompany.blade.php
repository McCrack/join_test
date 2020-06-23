<!doctype html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport"
          content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>New Company added</title>
</head>
<body>
    <h1 style="background-color:#00838f;color:white;margin:0;padding:50px 20px">New Company added</h1>
    <div style="padding: 20px">
        <p>Company Name: <b>{{ $company->name  }}</b></p>
        <p>Company Email: <b>{{ $company->email  }}</b></p>
        <p>Company Website: <b>{{ $company->website  }}</b></p>
    </div>
    <hr>
</body>
</html>
