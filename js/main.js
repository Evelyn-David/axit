// TABS - feature section

const tabContent = [
    {
        title: 'Tabs with soft transitioning effect.',
        paragraph_1: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet. Proin gravida dolor sit amet lacus accumsan et viverra justo commodo. Proin sodales pulvinar tempor. Cum sociis natoque penatibus et magnis dis parturient montes.',
        paragraph_2: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet.'
    },
    {
        title: 'Working: Title 2',
        paragraph_1: 'PARAGRAPH 2, consectetur adipiscing elit. Aenean euismod bibendum laoreet. Proin gravida dolor sit amet lacus accumsan et viverra justo commodo. Proin sodales pulvinar tempor. Cum sociis natoque penatibus et magnis dis parturient montes.',
        paragraph_2: 'PARAGRAPH 2 dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet.'
    },
    {
        title: 'Working: Title 3',
        paragraph_1: 'PARAGRAPH 3 -------, consectetur adipiscing elit. Aenean euismod bibendum laoreet. Proin gravida dolor sit amet lacus accumsan et viverra justo commodo. Proin sodales pulvinar tempor. Cum sociis natoque penatibus et magnis dis parturient montes.',
        paragraph_2: 'PARAGRAPH 3 -------, consectetur adipiscing elit. Aenean euismod bibendum laoreet.'
    }
]
const tabs = document.querySelectorAll('.tab');
const featureTitle = document.querySelector('.feat-title');

function toggleTabs(tabNumber) {
    tabs.forEach(tab => tab.classList.remove("active-tab"));
    event.target.classList.add("active-tab");
    featureTitle.innerText = `${tabContent[tabNumber].title}`;
}