<template>
    <div id="app">
        <div class="container text-center mt-3">
            <div class="col-5">
                <div class="form-group">
                    <label for="car_name">Car_name</label>
                    <input type="text"
                           id="car_name"
                           class="form-control" v-model.trim="CarName">
                </div>
                <div class="form-group">
                    <label for="car_year">Car_year</label>
                    <input type="text"
                           id="car_year"
                           class="form-control" v-model.number="CarYear">
                </div>
                <button class="btn btn-success" @click="createCar">Create Car</button>
                <button class="btn btn-primary" @click="loadCars">Load Cars</button>
                <ul class="list-group">
                    <li class="list-group-item" v-for="car in cars" :key="car.id">{{car.name}} - {{car.year}}</li>
                </ul>
                <hr>
                <div class="vuex">
                    <app-counter></app-counter>
                    <app-second-counter></app-second-counter>
                    <app-actions></app-actions>
                </div>
            </div>
            <button class="btn btn-primary mb-5" @click="show = !show">Toggle</button>

            <transition
                    name="ma"
                    :duration="{enter:500,leave:200}"
                    appear
            >
                <p v-if="show">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ea, quas.</p>
            </transition>

            <transition
                    enter-active-class="animate__animated animate__wobble"
                    leave-active-class="animate__animated animate__pulse"
            >
                <p v-if="show">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ea, quas.</p>
            </transition>

            <transition
                    name="ma"
                    mode="in-out"
            >
                <div class="alert alert-success" v-if="show">Success</div>
                <div class="alert alert-danger" v-else>Danger</div>
            </transition>

            <transition
                    @before-enter="beforeEnter"
                    @enter="Enter"
                    @after-enter="afterEnter"
                    @enter-cancelled="EnterCancelled"

                    @before-leave="beforeLeave"
                    @leave="Leave"
                    @after-leave="afterLeave"
                    @leave-cancelled="LeaveCancelled"
            >
                <p v-if="show">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quis, quisquam?</p>
            </transition>

            <button class="btn btn-success" @click="add">Add</button>
            <button class="btn btn-danger ml-1" @click="remove">Remove</button>
            <hr>
            <transition-group name="ma" tag="ul" class="list-group w-3" v-for="item in items" :key="item">
                <li class="list-group-item" :key="item">{{item}}</li>
            </transition-group>


        </div>
    </div>
</template>

<script>
    import Counter from "./components/Counter/Counter"
    import Actions from "./components/Actions/Actions"
    import SecondCounter from './components/Second_Counter/Counter'

    export default {
        name: 'App',
        data() {
            return {
                items: [
                    1, 2, 3, 4, 5
                ],
                newNum: 6,
                show: true,
                CarName: '',
                CarYear: 2018,
                cars: [],
                resource: '',
                counter: 0
            }
        },
        components: {
            'app-counter': Counter,
            'app-actions': Actions,
            'app-second-counter': SecondCounter
        },
        methods: {
            getIndex() {
                return Math.floor(Math.random() * this.items.length);
            },
            add() {
                this.items.splice(this.getIndex(), 0, this.newNum++)
            },
            remove() {
                this.items.splice(this.getIndex(), 1)
            },
            createCar() {
                const car = {
                    name: this.CarName,
                    year: this.CarYear
                }
                // this.$http.post(this.resource.url, car)
                //     .then(response => {
                //         return response.json()
                //     }).then(newCar => {
                //     console.log(newCar)
                // })
                this.resource.save({}, car)
            },
            loadCars() {
                // this.$http.get(this.resource.url)
                //     .then(response => {
                //         return response.json()
                //     }).then(cars => {
                //     this.cars = cars
                // })
                this.resource.get().then(response => {
                    this.cars = response.body
                })
            },
            beforeEnter(el) {
                console.log('beforeEnter', el)
            },
            Enter(el) {
                console.log('Enter', el)
            },
            afterEnter(el) {
                console.log('afterEnter', el)
            },
            EnterCancelled(el) {
                console.log('EnterCancelled', el)
            },
            beforeLeave(el) {
                console.log('beforeLeave', el)
            },
            Leave(el) {
                console.log('Leave', el)
            },
            afterLeave(el) {
                console.log('afterLeave', el)
            },
            LeaveCancelled(el) {
                console.log('LeaveCancelled', el)
            },

        },
        created() {
            this.resource = this.$resource('cars')
        }
    }
</script>

<style>
    @keyframes ma-animation-slide {
        from {
            transform: translateX(0px);
        }
        to {
            transform: translateX(-100px);
        }
    }

    .ma-enter {
        opacity: 0;
    }

    .ma-enter-active {
        transition: opacity 1s;
    }

    .ma-enter-to {
        opacity: 1;
    }

    .ma-leave {

    }

    .ma-leave-active {
        animation: 1s ma-animation-slide forwards;
        transition: opacity 1s;
    }

    .ma-leave-to {
        opacity: 0;
    }
</style>
