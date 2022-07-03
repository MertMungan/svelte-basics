<!--Layout page bütün sayfalarda gözüken elementler varsa onları bütün sayfalarda tekrarlamak yerine tek bir sayfada yazıp-->
<!--bütün sayfalarda görmemizi sağlıyor. Diğer sayfaların içeriklerini <slot> tagini kullanarak görebiliyoruz.-->

<script>
import Header from '../components/Header.svelte';
</script>

<Header/>

<main>
	<slot />
</main>

<style>
	main {
		flex: 1;
		display: flex;
		flex-direction: column;
		padding: 1rem;
		width: 100%;
		margin: 0 auto;
		box-sizing: border-box;
	}
</style>
