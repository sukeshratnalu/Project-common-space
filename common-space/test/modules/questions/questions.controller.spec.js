/**
 * Created by semanticbits on 6/9/16.
 */
/**
 * Created by semanticbits on 2/9/16.
 */

describe('This will test question controller',function () {
    var scope;
    var controller;
    beforeEach(module('commonSpace'));

    beforeEach(inject(function (_$controller_, $rootScope) {
        scope=$rootScope.$new();
        controller=_$controller_;
    }));
    it('should test controller',function(){
        var vm = controller("questionController",{});
        console.log('######################'+vm);

        expect(vm.getQuestions).toBeDefined();


    });
    it ('should test getQuestions method',function(){
        var vm = controller("questionController",{});
        var name='Science';
        var allSubjects=scope.allSubject;
        var questions=[];
        function getQuestions(){
            angular.forEach(qm.allSubject,function(data){
                if(data.name==name){

                    angular.forEach(data.subject,function(data){
                        questions.push(data);
                    })
                }

            });
        }
        expect(vm.topicQuestions).toEqual(questions);
    })



});
