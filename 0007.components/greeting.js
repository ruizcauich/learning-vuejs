/**
 * GREEETING COMPONENT
 */

// The /*javascript*/ comment is for highlight
// the `` ecmascript 6 template string
// (USING es6-string-javascript extenssion)


Vue.component('greeting', {
    template:
        /*javascript*/`
        <div>
            <!-- Templates must have only one root element-->
            <h1>Hi from vue component</h1>
            <h2> {{greeting}} </h2>
        </div>`,

    data(){
        return {
            greeting:"Hi, this is from the data()"
        }
    }
})
