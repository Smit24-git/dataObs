from rest_framework import permissions

""" restrict users to update only their own user details """
class UpdateUserDetail(permissions.BasePermission):
    def has_object_permission(self, request, view, obj):
        if request.method in permissions.SAFE_METHODS:
            return True
        
        return self.does_user_id_match_with_auth_user(request.user, obj)
    
    def does_user_id_match_with_auth_user(self, loggedInUser, object):
        return object.id == loggedInUser.id