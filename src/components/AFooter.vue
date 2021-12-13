<style>
.blog-footer {
    color: #FFF;
    margin-top: 20rem;
}

.blog-footer img {
    display: block;
}

.real-footer {
    background-color: #0e181d;
    padding: 1rem;
}

.blog-info {
    position: absolute;
    margin-left: 4rem;
    margin-top: 6rem;
    font-size: 1.5rem;
}

.blog-info img {
    width: 140px;
}

.blog-info p {
    margin: 0;
}
</style>

<template>
    <footer class="blog-footer">
        <div class="info-wrapper center">
            <img src="../assets/footer.png" alt="footer">
            <div class="blog-info flex flex-col gap-2 align-center">
                <img src="../assets/logo-zomo-white.png" alt="">

                <div class="flex gap-h flex-col align-center">
                    <p>琢磨是一家由设计师创办的交流平台</p>
                    <p>旨在让天下没有难做的乙方</p>
                </div>
            </div>
        </div>
        <div class="real-footer">
            <div class="layout-inner">
            </div>
        </div>
    </footer>
</template>