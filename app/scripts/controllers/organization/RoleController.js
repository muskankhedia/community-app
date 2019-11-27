(function (module) {
    mifosX.controllers = _.extend(module, {
        RoleController: function (scope, resourceFactory, location) {
            scope.roles = [];
            scope.routeTo = function (id) {
                location.path('/admin/viewrole/' + id);
            };


            if (!scope.x) {
                scope.x = null;
                console.log(" scope.x::: ",  scope.x)
                scope.saveSC();
            }
            scope.filterText = scope.x || '';
            console.log("scope.filterText:: ", scope.filterText)

            scope.onFilter = function () {
                scope.x = scope.filterText;
                console.log("scope.x:::::::: ", scope.x)
                scope.saveSC();
            };


            scope.RolesPerPage = 15;
            resourceFactory.roleResource.getAllRoles({}, function (data) {
                scope.roles = data;
            });

            scope.isRoleEnable = function(value) {
                return value;
            };
        }
    });
    mifosX.ng.application.controller('RoleController', ['$scope', 'ResourceFactory', '$location', mifosX.controllers.RoleController]).run(function ($log) {
        $log.info("RoleController initialized");
    });
}(mifosX.controllers || {}));
