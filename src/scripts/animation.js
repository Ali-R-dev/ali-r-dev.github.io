
<script src="../node_modules/jparticles/browser/jparticles.all.js"></script>

new JParticles.Particle('#demo')

Object.assign(JParticles.swing, {
    easeOutQuad: function (x, t, b, c, d) {
        return -c * (t /= d) * (t - 2) + b
    },
})
module.exports=this