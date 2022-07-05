<template>
  <div class="container">
    <b-card class="border-0 shadow mb-3">
      <b-card-text class="full-name mt-4 mb-4"><h6>{{fullName}}</h6></b-card-text>
      <b-card-text class="border-top border-light pt-3">
        <b-button 
          variant="outline-warning" 
          class="edit-btn mr-2"
          tag="router-link"
          :to="{ name: 'user', params: { editing: true, id: user.id } }"
        >
          Edit User
        </b-button>
        <b-button 
          variant="outline-danger"
          class="delete-btn"
          @click="$bvModal.show(modalName)"
        >
          Delete User
        </b-button>
      </b-card-text>
    </b-card>
    <b-modal :id="modalName" hide-footer title="Delete User">
      <h6>Are you sure you want to delete this user?</h6>
      <div class="mt-4">
        <b-button variant="outline-danger" block @click="DeleteUser(user.id)">Delete</b-button>
        <b-button class="mt-2" block @click="$bvModal.hide(modalName)">Cancel</b-button>
      </div>
    </b-modal>
  </div>
</template>

<script>
  export default {
    name: "UserCard",
    props: {
      user: {
        type: Object,
        required: true
      },
    },
    computed: {
      fullName() {
        return `${this.user.firstName} ${this.user.lastName}`
      },
      modalName() {
        return `delete-user${this.user.id}-modal`
      }
    },
    methods: {
      DeleteUser(user_id) {
        this.$store.dispatch('deleteUser', user_id)
        this.$bvModal.hide(this.modalName)
      }
    }
  }
</script>

<style lang="css">
  .modal-title {
    color: #dc3545;
  }
</style>