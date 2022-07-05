<template>
  <div class="container w-50 mx-auto">
    <b-card :title="editing ? 'Edit User' : 'Add User'" class="shadow-sm text-primary">
      <b-form @submit.prevent="handleSubmit()">
        <b-form-input v-model="user.firstName" name="firstname" :placeholder="placeholderFirstName" class="mt-3 mb-3" />
        <div v-if="isSubmitted && $v.user.firstName.$error" class="input-error">
          <span v-if="!$v.user.firstName.required">First name is required</span>
          <span v-if="!$v.user.firstName.alpha">First name should only contain characters</span>
          <span v-if="!$v.user.firstName.minLength">The first name should be more than 2 characters</span>
          <span v-if="!$v.user.firstName.maxLength">The first name shouldn't be more than 30 characters</span>
        </div>
        <b-form-input v-model="user.lastName" name="lastname" :placeholder="placeholderLastName" class="mb-2" />
        <div v-if="isSubmitted && $v.user.lastName.$error" class="input-error">
          <span v-if="!$v.user.lastName.required">Last name is required</span>
          <span v-if="!$v.user.lastName.alpha">Last name should only contain characters</span>
          <span v-if="!$v.user.lastName.minLength">The last name should be more than 2 characters</span>
          <span v-if="!$v.user.lastName.maxLength">The last name shouldn't be more than 50 characters</span>
        </div>
        <div class="form-footer mt-4">
          <b-button type="submit" variant="outline-primary" class="save-btn">Save</b-button>
          <b-button variant="outline-primary ml-2" @click="$router.go(-1)">Cancel</b-button>
        </div>
      </b-form>
    </b-card>
  </div>
</template>

<script>
  import { requiredIf, alpha, minLength, maxLength } from 'vuelidate/lib/validators'
  export default {
    name: "AddUserView",
    data() {
      return {
        editing: this.$route.params.editing,
        user: {
          firstName: '',
          lastName: ''
        },
        selectedUser: {
          firstName: '',
          lastName: ''
        },
        isSubmitted: false
      }
    },
    validations: {
      user: {
        firstName: {
          required: requiredIf(function () {
            return !this.editing
          }),
          alpha,
          minLength: minLength(2),
          maxLength: maxLength(30)
        },
        lastName: {
          required: requiredIf(function () {
            return !this.editing
          }),
          alpha,
          minLength: minLength(2),
          maxLength: maxLength(50)
        }
      }
    },
    mounted() {
      /* Get the selected user for editing */
      if (this.editing) {
        this.selectedUser = this.$store.getters.getUserById(this.$route.params.id)
      }
    },
    computed: {
      placeholderFirstName() {
        return this.editing ? this.selectedUser.firstName : 'Enter first name...'
      },
      placeholderLastName() {
        return this.editing ? this.selectedUser.lastName : 'Enter last name...'
      }
    },
    methods: {
      handleSubmit() {
        this.isSubmitted = true
        this.$v.$touch()
        if (this.$v.$invalid) {
          return
        }
        else {
          if (this.editing) {
            /* Case: Edit user */
            this.user.id = this.selectedUser.id
            if (this.user.firstName === '') {
              this.user.firstName = this.selectedUser.firstName
            }
            if (this.user.lastName === '') {
              this.user.lastName = this.selectedUser.lastName
            }
            this.$store.dispatch('editUser', this.user)
          }
          else {
            /* Case: Add user */
            this.$store.dispatch('addUser', this.user)
          }
          this.$router.go(-1)
        }
      }
    }
  }
</script>

<style lang="scss" scoped>
  .input-error {
    margin-bottom: 10px;

    span {
      display: block;
      color: #dc3545;
    }
  }
</style>