<!DOCTYPE html>
<html>
    <head>
        <link rel="stylesheet" href="style.css">
        <script type="text/javascript" src="script.js"></script>
    </head>
    <body>
        <h1>The Shoppies</h1>

        <div class="container">
            <form name="searchform" onsubmit="search(); return false;">
                <label for="searchbar">search</label>
                <input type="text" id="searchbar" placeholder="search...">
            </form>
        </div>
        <br>
        <div class="container">
            nominations
            <button>nominate</button>
        </div>
        <br>
        <div class="container">
            results
            <button>remove</button>
        </div>
        <br>
        <?php
            function display()
            {
                echo "hello ".$_POST["studentname"];
            }
            if(isset($_POST['submit']))
            {
                display();
            } 
        ?>
        <code id="response" class="container"></code>

        <!-- firebase snippet -->
        <!-- The core Firebase JS SDK is always required and must be listed first -->
        <script src="/__/firebase/8.2.1/firebase-app.js"></script>

        <!-- TODO: Add SDKs for Firebase products that you want to use
            https://firebase.google.com/docs/web/setup#available-libraries -->
        <script src="/__/firebase/8.2.1/firebase-analytics.js"></script>

        <!-- Initialize Firebase -->
        <script src="/__/firebase/init.js"></script>

    </body>
</html>