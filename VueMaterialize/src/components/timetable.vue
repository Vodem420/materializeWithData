<template>
  <div>
    <md-tabs>
      <router-link to="/timetable" tag="button">
        <md-tab id="tab-home" md-label="timeTable"></md-tab>
      </router-link>
      <md-tab id="tab-pages" md-label="Pages"></md-tab>
      <md-tab id="tab-posts" md-label="Posts"></md-tab>
      <md-tab id="tab-favorites" md-label="Favorites"></md-tab>
    </md-tabs>
    <div class="tableContainer">
      <div class="lol">
        <div class="leftContainer">
          <div class="leftContent">
            <div class="headerContainer">
              <h1 class="userContent">Users</h1>
            </div>
            <div class="usersList">
              <md-table v-model="users" md-sort="name" md-card>
                <md-table-row slot="md-table-row" slot-scope="{ item }">
                  <md-table-cell md-label="ID" md-sort-by="id" md-numeric>{{ item.id }}</md-table-cell>
                  <md-table-cell md-label="Name" md-sort-by="name">{{ item.name }}</md-table-cell>
                </md-table-row>
              </md-table>
            </div>
          </div>
        </div>
      </div>
      <div class="notLol">
        <div class="rightContainer">
          <div class="rightContent">
            <div class="headerContainer">
              <h1 class="userContent">Working Time</h1>
            </div>
            <md-table v-model="users" md-sort="days" md-card>
              <md-table-row slot="md-table-row" slot-scope="{ item }">
                <md-table-cell md-label="Monday" md-sort-by="monday">{{ item.monday }}</md-table-cell>
                <md-table-cell md-label="Tuesday" md-sort-by="tuesday">{{ item.tuesday }}</md-table-cell>
                <md-table-cell md-label="Wednesday" md-sort-by="wednesday">{{ item.wednesday }}</md-table-cell>
                <md-table-cell md-label="Thursday" md-sort-by="thursday">{{ item.thursday }}</md-table-cell>
                <md-table-cell md-label="Friday" md-sort-by="friday">{{ item.friday }}</md-table-cell>
              </md-table-row>
            </md-table>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    data: () => ({
      search: null,
      searched: [],
      users: [
        {
          id: 1,
          name: "Shawna Dubbin",
          monday: 8,
          tuesday: 7,
          wednesday: 8,
          thursday: 9,
          friday: 6,
        },
        {
          id: 2,
          name: "Odette Demageard",
          monday: 9,
          tuesday: 7,
          wednesday: 7,
          thursday: 10,
          friday: 9,
        },
        {
          id: 3,
          name: "Vera Taleworth",
          monday: 8,
          tuesday: 8,
          wednesday: 8,
          thursday: 8,
          friday: 8,
        },
        {
          id: 4,
          name: "Lonnie Izkovitz",
          monday: 7,
          tuesday: 7,
          wednesday: 7,
          thursday: 10,
          friday: 9,
        },
        {
          id: 5,
          name: "Thatcher Stave",
          monday: 8,
          tuesday: 7,
          wednesday: 9,
          thursday: 8,
          friday: 10,
        },
        {
          id: 6,
          name: "Karim Chipping",
          monday: 10,
          tuesday: 7,
          wednesday: 9,
          thursday: 7,
          friday: 8,
        },
        {
          id: 7,
          name: "Helge Holyard",
          monday: 9,
          tuesday: 9,
          wednesday: 9,
          thursday: 9,
          friday: 4,
        },
        {
          id: 8,
          name: "Rod Titterton",
          monday: 6,
          tuesday: 9,
          wednesday: 10,
          thursday: 8,
          friday: 6,
        },
        {
          id: 9,
          name: "Gawen Applewhite",
          monday: 8,
          tuesday: 8,
          wednesday: 8,
          thursday: 8,
          friday: 8,
        },
        {
          id: 10,
          name: "Nero Mulgrew",
          monday: 7,
          tuesday: 7,
          wednesday: 7,
          thursday: 7,
          friday: 7,
        },
      ]
    }),
    methods: {},
    created() {
      this.searched = this.users
    }
  }
</script>

<style lang="scss" scoped>
  .tableContainer {
    margin: 2% 5% 0;
    display: flex;
  }

  .lol {
    min-width: 25%;
    margin-right: 5%;
  }

  .notLol {
    min-width: 70%;
  }
</style>
