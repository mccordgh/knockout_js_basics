// This is a simple *viewmodel* - JavaScript that defines the data and behavior of your UI
const AppViewModel = function() {
    this.firstName = ko.observable('Bert');
    this.lastName = ko.observable('Bertington');
    
    this.fullName = ko.computed(() => {
        return `${this.lastName()}, ${this.firstName()}`;
    }, this);

    this.capitalizeLastName = () => {
        let currentVal = this.lastName();
        this.lastName(currentVal.toUpperCase());
    };
};

// Activates knockout.js
ko.applyBindings(new AppViewModel());