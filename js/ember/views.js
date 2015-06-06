App.IndexView = Em.View.extend({
    templateName: 'index',
    didInsertElement: function() {
        $('body').addClass('indexView')
        $('header>a>img.outlineLogo').addClass('showLogo')
        $('header>a>img.normalLogo').addClass('hideLogo')
        $('.ember-view.ost-text').addClass('ost-stroke')   
    },
    willClearRender: function() {
        $('body').removeClass('indexView')
        $('header>a>img.outlineLogo').removeClass('showLogo')
        $('header>a>img.normalLogo').removeClass('hideLogo')
        $('.ember-view.ost-text').removeClass('ost-stroke')  
    }
})

App.ReferencesView = Em.View.extend({
    templateName: 'references',
    didInsertElement: function() {
        $('body').addClass('referencesView')
    },
    willClearRender: function() {
        $('body').removeClass('referencesView')
    }
});

App.AboutView = Em.View.extend({
    templateName: 'about',
    didInsertElement: function() {
        $('body').addClass('aboutView')
    },
    willClearRender: function() {
        $('body').removeClass('aboutView')
    }
});

App.CatalogView = Em.View.extend({
    templateName: 'catalog',
    didInsertElement: function() {
        $('body').addClass('catalogView')
        $('header>a>img.blackLogo').addClass('showLogo')
        $('header>a>img.normalLogo').addClass('hideLogo')
        $('.ember-view.ost-text').addClass('ost-stroke-black')
        $('.pad-bottom').addClass('typ-stroke')    
    },
    willClearRender: function() {
        $('body').removeClass('catalogView')
        $('header>a>img.blackLogo').removeClass('showLogo')
        $('header>a>img.normalLogo').removeClass('hideLogo')
        $('.ember-view.ost-text').removeClass('ost-stroke-black')
        $('.pad-bottom').removeClass('typ-stroke')  
    }
});

App.BianchiView = Em.View.extend({
    templateName: 'bianchi',
        didInsertElement: function() {
        $('body').addClass('bianchiView')
        $('header>a>img.blackLogo').addClass('showLogo')
        $('header>a>img.normalLogo').addClass('hideLogo')
        $('.ember-view.ost-text').addClass('ost-stroke-black')
        $('.pad-bottom').addClass('typ-stroke')    
    },
    willClearRender: function() {
        $('body').removeClass('bianchiView')
        $('header>a>img.blackLogo').removeClass('showLogo')
        $('header>a>img.normalLogo').removeClass('hideLogo')
        $('.ember-view.ost-text').removeClass('ost-stroke-black')
        $('.pad-bottom').removeClass('typ-stroke')  
    }
});

App.CannondaleView = Em.View.extend({
    templateName: 'cannondale',
    didInsertElement: function() {
        $('body').addClass('cannondaleView')
        $('header>a>img.blackLogo').addClass('showLogo')
        $('header>a>img.normalLogo').addClass('hideLogo')
        $('.ember-view.ost-text').addClass('ost-stroke-black')
        $('.pad-bottom').addClass('typ-stroke') 
    },
    willClearRender: function() {
        $('body').removeClass('cannondaleView')
        $('header>a>img.blackLogo').removeClass('showLogo')
        $('header>a>img.normalLogo').removeClass('hideLogo')
        $('.ember-view.ost-text').removeClass('ost-stroke-black')
        $('.pad-bottom').removeClass('typ-stroke')  
    }
});

App.CenturionView = Em.View.extend({
    templateName: 'centurion',
    didInsertElement: function() {
        $('body').addClass('centurionView')
        $('header>a>img.blackLogo').addClass('showLogo')
        $('header>a>img.normalLogo').addClass('hideLogo')
        $('.ember-view.ost-text').addClass('ost-stroke-black')
        $('.pad-bottom').addClass('typ-stroke') 
    },
    willClearRender: function() {
        $('body').removeClass('centurionView')
        $('header>a>img.blackLogo').removeClass('showLogo')
        $('header>a>img.normalLogo').removeClass('hideLogo')
        $('.ember-view.ost-text').removeClass('ost-stroke-black')
        $('.pad-bottom').removeClass('typ-stroke')  
    }
});

App.NishikiView = Em.View.extend({
    templateName: 'nishiki',
    didInsertElement: function() {
        $('body').addClass('nishikiView')
        $('header>a>img.outlineLogo').addClass('showLogo')
        $('header>a>img.normalLogo').addClass('hideLogo')
        $('.ember-view.ost-text').addClass('ost-stroke') 
        $('.pad-bottom').addClass('typ-stroke') 
    },
    willClearRender: function() {
        $('body').removeClass('nishikiView')
        $('header>a>img.outlineLogo').removeClass('showLogo')
        $('header>a>img.normalLogo').removeClass('hideLogo')
        $('.ember-view.ost-text').removeClass('ost-stroke') 
        $('.pad-bottom').removeClass('typ-stroke')  
    }
});

App.SpecializedView = Em.View.extend({
    templateName: 'specialized',
    didInsertElement: function() {
        $('body').addClass('specializedView')
        $('header>a>img.blackLogo').addClass('showLogo')
        $('header>a>img.normalLogo').addClass('hideLogo')
        $('.ember-view.ost-text').addClass('ost-stroke-black')
        $('.pad-bottom').addClass('typ-stroke') 
    },
    willClearRender: function() {
        $('body').removeClass('specializedView')
        $('header>a>img.blackLogo').removeClass('showLogo')
        $('header>a>img.normalLogo').removeClass('hideLogo')
        $('.ember-view.ost-text').removeClass('ost-stroke-black')
        $('.pad-bottom').removeClass('typ-stroke')  
    }
});

App.PeugeotView = Em.View.extend({
    templateName: 'peugeot',
    didInsertElement: function() {
        $('body').addClass('peugeotView')
        $('header>a>img.blackLogo').addClass('showLogo')
        $('header>a>img.normalLogo').addClass('hideLogo')
        $('.ember-view.ost-text').addClass('ost-stroke-black')
        $('.pad-bottom').addClass('typ-stroke') 
    },
    willClearRender: function() {
        $('body').removeClass('peugeotView')
        $('header>a>img.blackLogo').removeClass('showLogo')
        $('header>a>img.normalLogo').removeClass('hideLogo')
        $('.ember-view.ost-text').removeClass('ost-stroke-black')
        $('.pad-bottom').removeClass('typ-stroke')  
    }
});

App.RaleighView = Em.View.extend({
    templateName: 'raleigh',
    didInsertElement: function() {
        $('body').addClass('raleighView')
        $('header>a>img.blackLogo').addClass('showLogo')
        $('header>a>img.normalLogo').addClass('hideLogo')
        $('.ember-view.ost-text').addClass('ost-stroke-black')
        $('.pad-bottom').addClass('typ-stroke') 
    },
    willClearRender: function() {
        $('body').removeClass('raleighView')
        $('header>a>img.blackLogo').removeClass('showLogo')
        $('header>a>img.normalLogo').removeClass('hideLogo')
        $('.ember-view.ost-text').removeClass('ost-stroke-black')
        $('.pad-bottom').removeClass('typ-stroke')  
    }
});

App.TrekView = Em.View.extend({
    templateName: 'trek',
    didInsertElement: function() {
        $('body').addClass('trekView')
        $('header>a>img.blackLogo').addClass('showLogo')
        $('header>a>img.normalLogo').addClass('hideLogo')
        $('.ember-view.ost-text').addClass('ost-stroke-black')
        $('.pad-bottom').addClass('typ-stroke') 
    },
    willClearRender: function() {
        $('body').removeClass('trekView')
        $('header>a>img.blackLogo').removeClass('showLogo')
        $('header>a>img.normalLogo').removeClass('hideLogo')
        $('.ember-view.ost-text').removeClass('ost-stroke-black')
        $('.pad-bottom').removeClass('typ-stroke')  
    }
});

App.JapaneseView = Em.View.extend({
    templateName: 'japanese',
    didInsertElement: function() {
        $('body').addClass('japaneseView')
        $('header>a>img.blackLogo').addClass('showLogo')
        $('header>a>img.normalLogo').addClass('hideLogo')
        $('.ember-view.ost-text').addClass('ost-stroke-black')
        $('.pad-bottom').addClass('typ-stroke') 
    },
    willClearRender: function() {
        $('body').removeClass('japaneseView')
        $('header>a>img.blackLogo').removeClass('showLogo')
        $('header>a>img.normalLogo').removeClass('hideLogo')
        $('.ember-view.ost-text').removeClass('ost-stroke-black')
        $('.pad-bottom').removeClass('typ-stroke')  
    }
});

App.FrenchView = Em.View.extend({
    templateName: 'french',
    didInsertElement: function() {
        $('body').addClass('frenchView')
        $('header>a>img.blackLogo').addClass('showLogo')
        $('header>a>img.normalLogo').addClass('hideLogo')
        $('.ember-view.ost-text').addClass('ost-stroke-black')
        $('.pad-bottom').addClass('typ-stroke') 
    },
    willClearRender: function() {
        $('body').removeClass('frenchView')
        $('header>a>img.blackLogo').removeClass('showLogo')
        $('header>a>img.normalLogo').removeClass('hideLogo')
        $('.ember-view.ost-text').removeClass('ost-stroke-black')
        $('.pad-bottom').removeClass('typ-stroke')  
    }
});

App.EnglishView = Em.View.extend({
    templateName: 'english',
    didInsertElement: function() {
        $('body').addClass('englishView')
        $('header>a>img.blackLogo').addClass('showLogo')
        $('header>a>img.normalLogo').addClass('hideLogo')
        $('.ember-view.ost-text').addClass('ost-stroke-black')
        $('.pad-bottom').addClass('typ-stroke') 
    },
    willClearRender: function() {
        $('body').removeClass('englishView')
        $('header>a>img.blackLogo').removeClass('showLogo')
        $('header>a>img.normalLogo').removeClass('hideLogo')
        $('.ember-view.ost-text').removeClass('ost-stroke-black')
        $('.pad-bottom').removeClass('typ-stroke')  
    }
});

App.ItalianView = Em.View.extend({
    templateName: 'italian',
    didInsertElement: function() {
        $('body').addClass('italianView')
        $('header>a>img.blackLogo').addClass('showLogo')
        $('header>a>img.normalLogo').addClass('hideLogo')
        $('.ember-view.ost-text').addClass('ost-stroke-black')
        $('.pad-bottom').addClass('typ-stroke') 
    },
    willClearRender: function() {
        $('body').removeClass('italianView')
        $('header>a>img.blackLogo').removeClass('showLogo')
        $('header>a>img.normalLogo').removeClass('hideLogo')
        $('.ember-view.ost-text').removeClass('ost-stroke-black')
        $('.pad-bottom').removeClass('typ-stroke')  
    }
});

App.UsaView = Em.View.extend({
    templateName: 'usa',
    didInsertElement: function() {
        $('body').addClass('usaView')
        $('header>a>img.blackLogo').addClass('showLogo')
        $('header>a>img.normalLogo').addClass('hideLogo')
        $('.ember-view.ost-text').addClass('ost-stroke-black')
        $('.pad-bottom').addClass('typ-stroke') 
    },
    willClearRender: function() {
        $('body').removeClass('usaView')
        $('header>a>img.blackLogo').removeClass('showLogo')
        $('header>a>img.normalLogo').removeClass('hideLogo')
        $('.ember-view.ost-text').removeClass('ost-stroke-black')
        $('.pad-bottom').removeClass('typ-stroke')  
    }
});

App.VendorsView = Em.View.extend({
    templateName: 'vendors',
    didInsertElement: function() {
        $('body').addClass('vendorsView')
        $('header>a>img.blackLogo').addClass('showLogo')
        $('header>a>img.normalLogo').addClass('hideLogo')
        $('.ember-view.ost-text').addClass('ost-stroke-black')
        $('.pad-bottom').addClass('typ-stroke') 
    },
    willClearRender: function() {
        $('body').removeClass('vendorsView')
        $('header>a>img.blackLogo').removeClass('showLogo')
        $('header>a>img.normalLogo').removeClass('hideLogo')
        $('.ember-view.ost-text').removeClass('ost-stroke-black')
        $('.pad-bottom').removeClass('typ-stroke')
    }
});

App.CreditsView = Em.View.extend({
    templateName: 'credits',
    didInsertElement: function() {
        $('body').addClass('creditsView')
        $('.creditsTab').addClass('hideFeature')
    },
    willClearRender: function() {
        $('body').removeClass('creditsView')
        $('.creditsTab').removeClass('hideFeature')
    }
});