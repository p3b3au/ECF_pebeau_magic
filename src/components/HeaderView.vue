<template>
    <!-- Header Wrapper -->
    <div id="header-wrapper">
        <div class="container">

            <!-- Header -->
            <header id="header">
                <div class="inner">

                    <!-- Logo -->
                    <h1 id="logo"><router-link :to="{name:'home'}">Magic</router-link>
       </h1>

                    <!-- Nav -->
                    <nav id="nav">
                        <ul>
                            <li><router-link :to="{name:'home'}">Home</router-link></li>
                            <li class="current_page_item"><router-link :to="{name:'collection'}">Ma collection</router-link></li>
                        </ul>
                    </nav>

                </div>
            </header>

        </div>
    </div>
</template>

<script>
export default {
    name: 'HeaderView'
}
</script>

