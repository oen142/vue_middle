<template>
    <div>
        <ul>
            <li v-for="(todoItem , index) in propsData" v-bind:key="todoItem.item" class="shadow">
                <button v-on:click="toggleComplete(todoItem, index)" v-bind:class="{checkBtnCompleted: todoItem.completed}">지우기</button>

                <span v-bind:class="{textCompleted : todoItem.completed}"> {{todoItem.item}}</span>
                <span class="removeBtn">
                     <button v-on:click="removeTodo(todoItem, index)">제거</button>
                </span>
            </li>
        </ul>
    </div>

</template>

<script>
    export default {
        name: "TodoList",
        props:['propsData'],
        methods: {
            removeTodo: function (todoItem, index) {
                console.log('remove items ', todoItem, index);
                localStorage.removeItem(todoItem);
                this.todoItems.splice(index, 1);
            },
            toggleComplete: function (todoItem , index) {
                console.log(todoItem , index);
                todoItem.completed = !todoItem.completed;
                localStorage.removeItem(todoItem);
                localStorage.setItem(todoItem.item ,JSON.stringify(todoItem));
            }
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


</style>