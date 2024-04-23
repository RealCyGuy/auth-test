<template>
  <h1 class="text-5xl font-semibold">Welcome</h1>
  <div class="flex flex-col gap-3">
    <StyledButton @click="signIn('osu')" class="bg-pink-400"
      >Continue with osu!</StyledButton
    >
    <StyledButton @click="signIn('discord')" class="bg-blue-700"
      >Continue with Discord</StyledButton
    >
    <StyledButton @click="signIn('spotify')" class="bg-green-700"
      >Continue with Spotify</StyledButton
    >
  </div>
</template>

<script setup lang="ts">
definePageMeta({
  auth: {
    unauthenticatedOnly: true,
    navigateAuthenticatedTo: "/",
  },
});

const { signIn } = useAuth();
</script>
