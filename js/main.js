// This is a simple *viewmodel* - JavaScript that defines the data and behavior of your UI
const AppViewModel = function() {
    this.firstName = ko.observable('Bert');
    this.lastName = ko.observable('Bertington');
    
    this.fullName = ko.computed(() => {
        return `${this.lastName()}, ${this.firstName()}`;
    }, this);

    this.capitalizeNames = () => {
        this.firstName(this.firstName().toUpperCase());
        this.lastName(this.lastName().toUpperCase());
    };
};

// Activates knockout.js
ko.applyBindings(new AppViewModel());