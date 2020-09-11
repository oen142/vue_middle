<template>
    <div id="app">
        <TodoHeader></TodoHeader>
        <!--v-on:하위컴포넌트에서 발생시킨 이벤트 이름="현재 컴포넌트의 메서드 명" -->
        <TodoInput></TodoInput>
        <!--v-bind:내려보낼 프롭스 속성 이름="현재 위치에 컴포넌트 데이터 속성"-->
        <TodoList></TodoList>
        <TodoFooter ></TodoFooter>
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
             TodoHeader,
             TodoInput,
             TodoList,
             TodoFooter,

        },

        data() {
            return {
                todoItems: []

            }
        },
        methods:{
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