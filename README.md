# General Info
This project is a simple parallax effect using CSS and JQuery.

## Table of contents
* [Technologies](#technologies)
* [Setup](#setup)

## Technologies
Project is created with:
* HTML5
* CSS3
* JQuery Version: 3.2.1
* Bootstrap Version: 3.3.7

## Setup
To run this project, put the main.js file before the `<body>` end.

```
<!DOCTYPE html>
<html>
<head>
    <link rel="stylesheet" href="css/bootstrap.min.css" />
    <link rel="stylesheet" href="css/style.css" />
</head>
<body>
    <script type="text/javascript" src="js/jquery-3.2.1.min.js"></script>
    <script type="text/javascript" src="js/main.js"></script>
</body>
</html
```

After this, create a `<div>` with the class `bg-parallax`.

```
<!DOCTYPE html>
<html>
<head>
    <link rel="stylesheet" href="css/bootstrap.min.css" />
    <link rel="stylesheet" href="css/style.css" />
</head>
<body>

    <div class="bg-parallax">
        <div class="col-xs-12 col-md-12">
            <h1>Hello World</h1>
        </div>
    </div>

    <script type="text/javascript" src="js/jquery-3.2.1.min.js"></script>
    <script type="text/javascript" src="js/main.js"></script>

</body>
</html>
```

Open the style.css file and search the class `bg-parallax`.

```
.bg-parallax {
    width: 100%;
    height: 100%;
    position: relative;
    background-position: 50% 0;
    background-repeat: no-repeat;
    background-attachment: fixed;
    background-size: cover;
    background-image: url("../img/background.jpg");
}
```

You'll see the attribute `background-image`, this is where your background is set.

With these steps finished, you'll see the parallax effect working.
