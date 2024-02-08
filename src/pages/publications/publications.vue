<template>
  <div class="main-container">
    <div class="navigation-section">
      <div class="logo-section">
        <img src="../../assets/img/lab-logo.jpeg" alt="" />
        <p>DSRL</p>
      </div>
      <div class="menu-icon">
        <q-icon name="menu" size="md" class="icon">
          <q-menu>
            <q-list>
              <q-item
                clickable
                v-close-popup
                v-for="(item, keys) in navItems"
                :key="keys"
                @click="navItemClick(item)"
              >
                <q-item-section>{{ item.name }}</q-item-section>
              </q-item>
            </q-list>
          </q-menu>
        </q-icon>
      </div>
      <div class="nav-items">
        <p
          v-for="(item, key) in navItems"
          :key="key"
          :class="`nav-item ${item.name == activeTab ? 'active-tab' : ''}`"
          @click="navItemClick(item)"
        >
          {{ item.name }}
        </p>
      </div>
    </div>
    <div class="about-section">
      <div class="lab-info">
        <p class="title">Publications</p>
      </div>
    </div>
    <div class="publications">
      <div v-for="(item, key) in publicationYears" :key="key" class="year">
        <p>{{ item }}</p>
        <hr />
        <div
          v-for="(publication, key) in getPublicationsByYear(item)"
          :key="key"
          class="publication"
        >
          <span v-for="(person, key) in publication.people" :key="key">
            {{ person }},</span
          >
          <span class="title"> {{ publication.title }}</span>
          <span class="extras"> {{ publication.extras }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { publications } from "src/data/constants";
export default {
  name: "PublicationDetails",

  data() {
    return {
      publications: publications,
      activeTab: "Publications",
      navItems: [
        {
          name: "Home",
          to: "/",
        },
        {
          name: "Projects",
          to: "/#projects",
        },
        {
          name: "People",
          to: "/#people",
        },
        {
          name: "Publications",
          to: "/",
        },
      ],
    };
  },
  computed: {
    publicationYears() {
      let years = this.publications.map((item) => {
        return item.year;
      });

      years = new Set(years);

      return years;
    },
  },

  methods: {
    getPublicationsByYear(year) {
      const publications = this.publications.filter((item) => {
        return item.year == year;
      });
      return publications;
    },
    navItemClick(item) {
      this.$router.push(item.to);
    },
  },
};
</script>

<style scoped lang="scss">
@import "./publications.scss";
</style>
