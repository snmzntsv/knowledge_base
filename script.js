const topics = {
    1: {
        title: "Тема 1",
        subtopics: {
            "1.1": "Некий текст, привязанный к Подтеме 1.1",
            "1.2": "Некий текст, привязанный к Подтеме 1.2",
            "1.3": "Некий текст, привязанный к Подтеме 1.3"
        }
    },
    2: {
        title: "Тема 2",
        subtopics: {
            "2.1": "Некий текст, привязанный к Подтеме 2.1",
            "2.2": "Некий текст, привязанный к Подтеме 2.2",
            "2.3": "Некий текст, привязанный к Подтеме 2.3"
        }
    }
};

const topicList = document.getElementById('topicList');
const subtopicList = document.getElementById('subtopicList');
const content = document.getElementById('content');
let currentTopic = 1;
let currentSubtopic = "1.1";

function updateSubtopics() {
    subtopicList.innerHTML = '';
    const subtopics = topics[currentTopic].subtopics;
    for (const key in subtopics) {
        const li = document.createElement('li');
        li.className = 'subtopic';
        li.dataset.subtopic = key;
        li.textContent = `Подтема ${key}`;
        li.addEventListener('click', () => {
            currentSubtopic = key;
            content.textContent = subtopics[key];
            highlightSubtopic(li);
        });
        subtopicList.appendChild(li);
    }
    // Подсвечиваем первую подтему по текущей теме
    if (subtopicList.firstChild) {
        highlightSubtopic(subtopicList.firstChild);
    }
}

function highlightTopic(selected) {
    const topicItems = topicList.getElementsByClassName('topic');
    for (const item of topicItems) {
        item.classList.remove('selected');
    }
    selected.classList.add('selected');
}

function highlightSubtopic(selected) {
    const subtopicItems = subtopicList.getElementsByClassName('subtopic');
    for (const item of subtopicItems) {
        item.classList.remove('selected');
    }
    selected.classList.add('selected');
}

topicList.addEventListener('click', (event) => {
    if (event.target.classList.contains('topic')) {
        // обновляем выбранную тему
        currentTopic = event.target.dataset.topic;
        highlightTopic(event.target);
        // обновляем список подтем, выбирая первую по умолчанию
        updateSubtopics();
        const firstSubKey = Object.keys(topics[currentTopic].subtopics)[0];
        currentSubtopic = firstSubKey;
        content.textContent = topics[currentTopic].subtopics[currentSubtopic];
    }
});

// Инициализация при загрузке страницы
highlightTopic(topicList.querySelector('.topic[data-topic="1"]'));
updateSubtopics();
content.textContent = topics[currentTopic].subtopics[currentSubtopic];
