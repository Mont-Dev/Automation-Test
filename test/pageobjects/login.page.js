

const Page = require('./page');


class SearchPage extends Page {

    get inputsearch () {
        return $('[name="q"]');
    }

    get url () {
        return $('[href="https://www.focusservices.com/"]');
    }
    
    get footer(){
        return $('#footer');
    }

    get nowhiring(){
        return this.footer.$('span[class="avia_iconbox_title"]');
    }
    get location(){
        return $('[href="https://www.focusservices.com/locations/"]');
    }

    get northamerica(){
        return $('[href="#north-america"]');
    }

    get northamericahref(){
        return this.northamerica.getAttribute('href')
    }
    
    get centralamerica(){
        return $('[href="#central-america"]');
    }

    get salvadorandnicaragua(){
        return $('xpath://*[@id="av-tab-section-1"]/div/div[2]/div[2]/div/div/section/div/h2');
    }

    get asia(){
        return $('[href="#asia"]');
    }

    get bacolod(){
        return $('xpath://*[@id="av-tab-section-1"]/div/div[2]/div[3]/div/div/div[2]/section/div/h3/b');
    }
    
    async search (searchvalue) {
        await this.inputsearch.setValue(searchvalue);
        browser.keys('\uE007');
        await this.url.click();
        await this.footer.scrollIntoView();
  
    }

    open () {
        return super.open('search');
    }
}

module.exports = new SearchPage();


