function skillsMember() {
    return {
        restrict: 'E',
        templateUrl: 'modules/skills/views/member.html',
        controllerAs: 'vs',
        bindToController: true,
        scope: {
            member: '*'
        }
    };
}