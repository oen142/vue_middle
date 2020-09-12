<template>
    <div>

        <transition-group name="list" tag="ul">

            <li v-for="(todoItem , index) in this.todoItem" v-bind:key="todoItem.item" class="shadow">
                <button v-on:click="toggleComplete({todoItem, index})"
                        v-bind:class="{checkBtnCompleted: todoItem.completed}">지우기
                </button>

                <span v-bind:class="{textCompleted : todoItem.completed}"> {{todoItem.item}}</span>
                <span class="removeBtn">
                     <button v-on:click="removeTodo({todoItem, index})">제거</button>
                </span>
            </li>
        </transition-group>
    </div>

</template>

<script>
    import {mapGetters, mapMutations} from 'vuex';

    export default {
        name: "TodoList",
        methods: {

            ...mapMutations({
                removeTodo : 'removeOneItem',
                toggleComplete : "todoCompleteOneItem"
            }),
/*
            removeTodo(todoItem, index) {

                //this.$emit('removeItem', todoItem, index);
                this.$store.commit('removeOneItem', {todoItem, index});
                console.log(todoItem);

            },
            toggleComplete(todoItem, index) {
                console.log(todoItem, index);
                this.$store.commit('todoCompleteOneItem', {todoItem, index})
                //  this.$emit('toggleComplete', todoItem, index);
            }*/
        },
        computed: {
            /*todoItems(){
                return this.$store.getters.storedTodoItems;
            }*/
            ...mapGetters({
                todoItem: 'storedTodoItems'
            })
        }
    }
</script>

<style scoped>
    ul {
        list-style-type: none;
        padding-left: 0px;
        margin-top: 0;
        text-align: left;
    }

    li {
        display: flex;
        min-height: 50px;
        height: 50px;
        line-height: 50px;
        margin: 0.5rem 0;
        padding: 0 0.9rem;
        background: white;
        border-radius: 5px;
    }

    .checkBtn {
        line-height: 45px;
        color: #62acde;
        margin-right: 5px;
    }

    .checkBtnCompleted {
        color: #63adad;
    }

    .textCompleted {
        text-decoration: line-through;
        color: #b3adad;
    }

    .removeBtn {
        margin-left: auto;
        color: #de4343;
    }

    /*
    리스트 아이템 트랜지션 효과
    */
    .list-item {
        display: inline-block;
        margin-right: 10px;
    }

    .list-enter-active, .list-leave-active {
        transition: all 1s;
    }

    .list-enter, .list-leave-to /* .list-leave-active below version 2.1.8 */
    {
        opacity: 0;
        transform: translateY(10px);
    }

</style>