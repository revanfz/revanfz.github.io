<script>
export default {
    props: {
        name: String,
        id: String,
    }
}
</script>

<template>
    <li>
        <a :href="`#${id}`">{{ name }}</a>
    </li>
</template>