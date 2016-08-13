/**
 * Created by Ksu on 12.08.2016.
 */
var book=[{
    firstName:'Sara',
    lastName:'Fox',
    number:'+380(097)123-44-77'
},
    {
        firstName:'Sonya',
        lastName:'Patterson',
        number:'+380(095)833-40-11'
    },
    {
        firstName:'Coul',
        lastName:'Teylor',
        number:'+380(099)777-44-77'
    },
    {
        firstName:'Mia',
        lastName:'Leger',
        number:'+380(050)222-11-00'
    },
    {
        firstName:'Ross',
        lastName:'Geller',
        number:'+380(066)000-15-00'
    },
    {
        firstName:'Pit',
        lastName:'Legeroy',
        number:'+380(044)111-11-00'
    },
    {
        firstName:'Sara',
        lastName:'Roy',
        number:'+380(073)456-78-99'
    },
    {
        firstName:'Rick',
        lastName:'Dark',
        number:'+380(032)987-65-43'
    }];
localStorage.setItem('phoneBook', JSON.stringify(book));

angular.module('appPhoneBook',[])
.controller('bookCtrl',function(){
    var self = this;
    self.names = JSON.parse(localStorage.getItem('phoneBook'));
    self.class1 = "firstRow";
    self.class2 = "secondRow";
    self.numeroNew=$("#numberNew").mask("+38(999)999-99-99");
    self.numeroEdit=$("#numberEdit").mask("+38(999)999-99-99");

//sort by
    self.setOrderProperty = function(propertyName) {
        if (self.orderProperty === propertyName) {
            return self.orderProperty = '-' + propertyName;
        } else if (self.orderProperty === '-' + propertyName) {
            return self.orderProperty = propertyName;
        } else {
           return self.orderProperty = propertyName;
        }
    };
    //delete row
    self.delDiv = function(num){
        var index = self.names.indexOf(num);
        if (index != -1) {
            self.names.splice(index, 1);
        }
    };
    //edit row
    self.editDiv = function (num) {
        $(".background").css({display: "block"}).animate({opacity: "0.5"}, 1000);
        $(".editDiv").css({display: "block"});
        $(".editDiv").animate({top: "0px"}, 1000);
        var index = self.names.indexOf(num);
        if (index != -1) {
            self.editFName = self.names[index].firstName;
            self.editLName = self.names[index].lastName;
            self.editNumber = self.names[index].number;
            self.index = index;
        }
    }
    //save edit
    self.saveEdit = function () {
        $(".background").animate({opacity: "0"});
        $(".editDiv").animate({opacity: "0"});
        setTimeout(function () {
            $(".editDiv").css({display: "none"});
            $(".background").css({display: "none"});
        }, 1000);
        self.names[self.index].firstName = self.editFName;
        self.names[self.index].lastName = self.editLName;
        self.names[self.index].number = self.editNumber;
    };
    //snow for new
    self.showNew = function(){
        $(".background").css({display: "block"}).animate({opacity: "0.5"}, 1000);
        $(".newDiv").css({display: "block"});
        $(".newDiv").animate({top: "0px"}, 1000);
    }
    //save new contact
    self.saveNew= function() {
        $(".background").animate({opacity: "0"});
        $(".newDiv").animate({opacity: "0"});
        setTimeout(function () {
            $(".newDiv").css({display: "none"});
            $(".background").css({display: "none"});
        }, 1000);
        self.names.push({firstName: self.newFName, lastName: self.newLName, number: self.newNumber, done: false});
        self.newFName = '';
        self.newLName = '';
        self.newNumber = '';
    }
});
