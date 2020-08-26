<template>
    <div id="app">
        <TodoHeader></TodoHeader>
        <!--v-on:하위컴포넌트에서 발생시킨 이벤트 이름="현재 컴포넌트의 메서드 명" -->
        <TodoInput v-on:addTodoItem="addOneItem"></TodoInput>
        <!--v-bind:내려보낼 프롭스 속성 이름="현재 위치에 컴포넌트 데이터 속성"-->
        <TodoList v-bind:propsData="todoItems"></TodoList>
        <TodoFooter></TodoFooter>
    </div>
</template>

<script>
    import TodoHeader from './components/TodoHeader';
    import TodoInput from './components/TodoInput';
    import TodoList from './components/TodoList';
    import TodoFooter from './components/TodoFooter';

    export default {
        name: "App",
        components: {
            'TodoHeader': TodoHeader,
            'TodoInput': TodoInput,
            'TodoList': TodoList,
            'TodoFooter': TodoFooter,

        },

        data: function () {
            return {
                todoItems: []

            }
        },
        created: function () {
            if (localStorage.length > 0) {
                for (let i = 0; i < localStorage.length; i++) {
                    if (localStorage.key(i) !== 'loglevel:webpack-dev-server') {
                        this.todoItems.push(JSON.parse(localStorage.getItem(localStorage.key(i))));
                        //this.todoItems.push(localStorage.key(i));
                    }
                }
            }
        },
        methods:{
            addOneItem: function(todoItem){
                let obj = {
                    completed: false,
                    item: todoItem
                };
                localStorage.setItem(todoItem, JSON.stringify(obj));
                this.todoItems.push(obj);
            }
        }
    }
</script>

<style>
    body {
        text-align: center;
        background-color: #F6F6F6;
    }

    input {
        border-style: groove;
        width: 200px;
    }

    button {
        border-style: groove;
    }

    .shadow {
        box-shadow: 5px 10px 10px rgba(0, 0, 0, 0.3);
    }
</style>