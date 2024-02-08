<template>
  <div class="container">
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
        <p class="title">{{ project.name }}</p>
      </div>
    </div>
    <div class="overview-section">
      <p class="overview">Overview</p>
      <div class="body">
        <div class="text-section">
          <p v-html="project.full_details"></p>
        </div>
        <div class="image-section">
          <img :src="project.image_link" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { projects } from "src/data/constants";
export default {
  name: "ProjectInfo",

  data() {
    return {
      projects: projects,
      mode: "light",
      activeTab: "Projects",
      project: {},
      navItems: [
        {
          name: "Home",
          to: "/",
        },
        {
          name: "Projects",
          to: "",
        },
        {
          name: "People",
          to: "",
        },
        {
          name: "Publications",
          to: "/",
        },
      ],
    };
  },

  mounted() {
    const slug = this.$route.params.name;
    const project = this.projects.filter((project) => {
      return project.slug == slug;
    });

    this.project = project[0];
  },
  computed: {},

  methods: {
    navItemClick(item) {
      this.$router.push(item.to);
    },
  },
};
</script>

<style scoped lang="scss">
@import "./ProjectInfo.scss";
</style>
