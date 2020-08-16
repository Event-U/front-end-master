<template>
	<section class="section-one">
		<div class="container container-one">
			<div class="row">
				<div class="col-sm-3">
					<img src="/assets/landing/images/logo.svg" alt="logo" />
				</div>
			</div>
			<div class="row bg-one">
				<div class="col-md-6 col-sm-12">
					<h1 class="futura-medium-bt text-70">
						La plataforma <br />
						#1 de eventos <br />
						en México
					</h1>
					<br />
					<p>
						Organizadores, proveedores o inversionistas; cualquiera puede
						participar en los eventos
					</p>
					<div class="btn-media">
						<nuxt-link to="/app/organizador/mis-eventos">
							<button type="button" class="btn btn-outline-dark btn-one">
								Comenzar ahora
							</button>
						</nuxt-link>
					</div>
				</div>
				<div class="col-md-6 col-sm-12 view-one">
					<img
						src="/assets/landing/images/AppleiPhone.png"
						class="img-iphone"
						alt=""
					/>
				</div>
			</div>
		</div>
	</section>
</template>

<script>
export default {
	name: 'LandingHeroHeader',
};
</script>

<style lang="scss" scoped></style>
