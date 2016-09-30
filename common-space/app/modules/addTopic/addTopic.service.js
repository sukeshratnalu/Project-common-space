(function(){
    angular.module('commonSpace')
        .service('addTopicService',addTopicService);
    addTopicService.$injecct=['$uibModal'];
    function addTopicService($uibModal){

        var newTopic={
            name:'',
            subject:[]
        };
        var service={
            openAddAnswerModal:openAddAnswerModal,
            openAddQuestionModal:openAddQuestionModal,
            openAddTopicModal:openAddTopicModal,
            addTopic:addTopic

        };
        function addTopic(subject){
            openAddTopicModal(subject);
        }
        /*logic for addTask modal*/
        function openAddTopicModal(subject){

            var modalInstance = $uibModal.open({
                templateUrl:'partials/addTopic.html',
                windowClass: 'center-modal',
                controller: function($uibModalInstance){
                    var cd=this;
                    cd.questionNumber;
                    cd.newTopic={
                        name:'',
                        subject:[]
                    };

                    cd.ok = function () {
                        newTopic.name=cd.newTopic.name;
                        for(var i=1;i<=cd.questionNumber;i++){
                            newTopic.subject.push(openAddQuestionModal());
                        }
                        subject.push(newTopic);
                        console.log(subject);
                        $uibModalInstance.dismiss();
                    };
                    cd.cancel = function () {
                        $uibModalInstance.dismiss();
                    };
                },
                controllerAs:'cd'
            });
        }
        function openAddQuestionModal(){
            var subject={
                question:'',
                rate:0,
                answers:[]
            };
            var modalInstance = $uibModal.open({
                templateUrl:'partials/addQuestion.html',
                windowClass: 'center-modal',
                controller: function($uibModalInstance){
                    var qd=this;
                    qd.answerNumber;
                    qd.rate;
                    qd.question;
                    qd.ok = function () {
                        subject.question=qd.question;
                        subject.rate=qd.rate;
                        for(var j=1;j<=qd.answerNumber;j++){
                            subject.answers.push(openAddAnswerModal());
                        }
                        $uibModalInstance.dismiss();
                    };
                    qd.cancel = function () {
                        $uibModalInstance.dismiss();
                    };

                },
                controllerAs:'qd'
            });
            console.log(subject);
            return subject;
        }
        function openAddAnswerModal(){
            var answers={
                answer:'',
                author:'',
                rate:0,
                answereddate:''
            };
            var modalInstance=$uibModal.open({
                templateUrl:'partials/addAnswer.html',
                windowClass: 'center-modal',
                controller: function($uibModalInstance){
                    var  ad=this;
                    ad.answer;
                    ad.author;
                    ad.rate;
                    ad.answereddate;
                    ad.ok=function(){

                        answers.answer=ad.answer;
                        answers.author=ad.author;
                        answers.rate=ad.rate;
                        answers.answereddate=ad.answereddate;
                        $uibModalInstance.dismiss();

                    };
                    ad.cancel = function () {
                        $uibModalInstance.dismiss();
                    };

                },
                controllerAs:'ad'
            });
            console.log(answers);
            return answers;
        }
        return service;
    }
}());
