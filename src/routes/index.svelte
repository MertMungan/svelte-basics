<script context="module">
	export const prerender = true;
</script>

<svelte:head>
	<title>Homepage</title>
</svelte:head>

<section>
	<p>
		This is the homepage of our Svelte app.
        Click on the header to see other pages.
    </p>
</section>


<style>
section{
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100vh;
}
</style>
