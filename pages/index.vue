<template>
  <h1 class="text-5xl font-semibold">
    You are logged in as {{ data?.user?.name }}
  </h1>
  <StyledButton @click="signOut" class="bg-emerald-800">Sign out!</StyledButton>
</template>

<script setup lang="ts">
const { data, signOut } = useAuth();
</script>
