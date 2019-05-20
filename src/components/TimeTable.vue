<template>
  <div id="TimeTable">
    <table>
      <thead>
        <tr>
          <th v-for="head in heads" :key="head">{{ head }}</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="index in indexes" :key="index">
          <td class="time">{{ times[index] + ' ~ ' + times[index + 1] }}</td>
          <template v-for="day in days">
            <td
              v-if="getEvent(times[index], day) !== undefined"
              class="event"
              :key="day"
              :rowspan="calcRowspan(index, getEvent(times[index], day))"
            >
              <h4>{{ getEvent(times[index], day).title }}</h4>
              <h5>{{ getEvent(times[index], day).subTitle }}</h5>
            </td>
          </template>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import events from '../assets/json/events.json'
import groupBy from 'lodash.groupby'
import range from 'lodash.range'
import uniq from 'lodash.uniq'

export default {
  name: 'TimeTable',
  data () {
    return {
      start: '07:30',
      end: '22:00',
      heads: ['', 'Day 1', 'Day 2', 'Day 3', 'Day 4', 'Day 5'],
      days: ['1', '2', '3', '4', '5'],
      events: events
    }
  },
  computed: {
    groups: function () {
      return groupBy(this.events, 'time.start')
    },
    times: function () {
      const result = []
      for (let i = 0; result[result.length-1] !== this.end; i++) {
        let time = this.getTime(this.start).hour * 60 + this.getTime(this.start).min + i * 30
        let temp = {
          hour: Math.floor(time / 60),
          min: time % 60
        }
        result.push(`${temp.hour}:${temp.min.toString().padStart('2', '0')}`)
      }
      return result
    },
    indexes: function () {
      return range(0, this.times.length - 1)
    }
  },
  methods: {
    getTime (value) {
      const sp = value.split(':')
      return {
        hour: Number(sp[0]),
        min: Number(sp[1])
      }
    },
    getEvent (time, day) {
      console.log(time, day)
      if (this.groups[time]) return this.groups[time].find((element) => element.time.day === day)
      else return undefined
    },
    calcRowspan (index, event) {
      let start = this.getTime(event.time.start).hour * 60 + this.getTime(event.time.start).min
      let end = this.getTime(event.time.end).hour * 60 + this.getTime(event.time.end).min
      return Math.floor((end - start) / 30)
    }
  }
}
</script>

<style lang="sass" scoped>
#TimeTable
  overflow: overflow-x
table
  width: 100%
  min-width: 600px
  box-sizing: border-box
  border-collapse: separate
  th,td
    vertical-align: middle
    border: 1px solid #000
    h4,h5
      margin: 0
  .time
    height: 40px
  .event
    width: 130px
</style>
