<template>
    <div class="inputBox shadow">
        <input type="text" v-model="newTodoItem" v-on:keyup.enter="addTodo">

        <span class="addContainer">
            <button v-on:click="addTodo">추가</button>
        </span>

        <Modal v-if="showModal" @close="showModal = false">

            <h3 slot="header">경고!<button class="closeButton" @click="showModal=false">종료</button></h3>
            <h4 slot="body">아무것도 입력하지 않으셨습니다.</h4>
            <h5 slot="footer">경고 푸터</h5>
        </Modal>
    </div>
</template>

<script>
    import Modal from './common/Modal.vue'


    export default {
        name: "TodoInput",

        data: function () {
            return {
                newTodoItem: "",
                showModal : false
            }
        },
        methods: {
            addTodo: function () {
                if (this.newTodoItem !== '') {
                    //this.$emit('이벤트 이름' ,인자1 , 인자2...);
                    this.$emit('addTodoItem', this.newTodoItem)
                    this.clearInput();
                    return;
                }
                this.showModal = !this.showModal;
            },
            clearInput: function () {
                this.newTodoItem = "";
            },
            closeModal: function(){
                this.showModal = !this.showModal;
            }
        },
        components: {
            Modal: Modal

        }
    }
</script>

<style scoped>
    input:focus {
        outline: none;
    }

    .inputBox {
        background: white;
        height: 50px;
        line-height: 50px;
        border-radius: 5px;
    }

    .inputBox input {
        border-style: none;
        font-size: 0.9rem;
    }

    .addContainer {
        float: right;
        background: linear-gradient(to right, #6478FB, #8763FB);
        display: block;
        width: 3rem;
        border-radius: 0 5px 5px 0;

    }

    .addBtn {
        color: white;
        vertical-align: middle;
    }
    .closeModalBtn{
        color: #42b983;

    }
</style>