<!DOCTYPE html>
<html lang="ru">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>База знаний</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <div class="container">
        <div class="topics">
            <h2>Темы</h2>
            <ul id="topicList">
                <li class="topic" data-topic="1">Тема 1</li>
                <li class="topic" data-topic="2">Тема 2</li>
            </ul>
        </div>
        <div class="subtopics">
            <h2>Подтемы</h2>
            <ul id="subtopicList">
                <li class="subtopic" data-subtopic="1.1">Подтема 1.1</li>
                <li class="subtopic" data-subtopic="1.2">Подтема 1.2</li>
                <li class="subtopic" data-subtopic="1.3">Подтема 1.3</li>
            </ul>
        </div>
        <div class="content">
            <h2>Содержание</h2>
            <p id="content">Некий текст, привязанный к Подтеме 1.1</p>
        </div>
    </div>
    <script src="script.js"></script>
</body>
</html>
