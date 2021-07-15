function tabs(tabsSelector, tabsContentSelector, tabsParentSelector, activeClass) {
    //////////////////////////////////////
    // Tabs
    
    const tabs = document.querySelectorAll(tabsSelector),
          tabsParent = document.querySelector(tabsParentSelector),
          tabsContent = document.querySelectorAll(tabsContentSelector);
          
    hideTabsContent();
    showTabsContent();
    
    tabsParent.addEventListener('click', function (event) {
        const target = event.target;

        if (target && target.classList.contains(tabsSelector.slice(1))) {
            tabs.forEach(function (item, index) {
                if (item == target) {
                    hideTabsContent();
                    showTabsContent(index);
                }
            });
        }
    });


    function showTabsContent (index = 0) {
        tabsContent[index].classList.add('show', 'fade');
        tabsContent[index].classList.remove('hide');

        tabs[index].classList.add(activeClass);
    }   

    function hideTabsContent () {
        tabsContent.forEach(function (item) {
            item.classList.add('hide');
            item.classList.remove('show', 'fade');
        });

        tabs.forEach(function (item) {
            item.classList.remove(activeClass);
        });
    }

}


export default tabs;