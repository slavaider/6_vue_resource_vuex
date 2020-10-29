<template>
    <div id="app">
        <link rel="stylesheet"
              href="https://cdn.jsdelivr.net/npm/bootstrap@4.5.3/dist/css/bootstrap.min.css"
              integrity="sha384-TX8t27EcRE3e/ihU7zmQxVncDAy5uIKz4rEkgIXeMed4M0jlfIDPvg6uqKI2xXr2"
              crossorigin="anonymous"
        >
        <div class="container pt-5">
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
            }
        },
        created() {
            this.resource = this.$resource('cars')
        }
    }
</script>

<style>

</style>
