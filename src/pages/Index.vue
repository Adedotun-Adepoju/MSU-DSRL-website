<template>
  <div>
    <div class="top-button">
      <q-btn @click="goToTop" icon="arrow_upward" class="go-to-top-btn" />
    </div>
    <div class="navigation-section">
      <div class="logo-section">
        <img src="../assets/img/lab-logo.jpeg" alt="" />
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
        <p class="title" v-if="activeTab == 'Home'">
          Data Science Research Lab
        </p>
        <p class="description" v-if="activeTab == 'Home'">
          The Data Science Research Lab is part of Morgan State University at
          the Computer Science Department. We focus on converging cutting edge
          data science techniques with diverse fields to address complex
          challenges
        </p>
      </div>
      <div class="upcoming-event" v-if="activeTab == 'Home'">
        <div class="title">
          <img src="../assets/img/calendar-icon.png" alt="" />
          <p>upcoming Event</p>
        </div>
        <p class="date">May 03, 2024</p>
        <p class="event-name" @click="goToConference">
          2024 Data Science for Social Work Conference
        </p>
      </div>
    </div>
    <div v-if="activeTab == 'Home'" class="home">
      <div class="projects-section" id="projects">
        <div class="title-container">
          <p class="title">Projects</p>
          <div id="border-bottom"></div>
        </div>
        <div class="project-tiles">
          <ProjectCard
            v-for="(project, key) in projects"
            :key="key"
            :name="project.name"
            :description="project.description"
            :image="project.image_link"
            class="project-card"
            @click="goToDescription(project)"
          />
        </div>
      </div>
      <div class="people-section" id="people">
        <div class="title-container">
          <p class="title">People</p>
        </div>
        <div class="people-tiles">
          <PersonCard
            v-for="(person, key) in people"
            :key="key"
            :name="person.name"
            :title="person.title"
            :slug="person.slug"
            :image="person.image_link"
            :leftMargin="person.left_margin"
            :topMargin="person.top_margin"
            class="person-card"
          />
        </div>
      </div>
    </div>
    <div class="footer">
      <div class="address">
        <p class="title">Address</p>
        <p class="full-address">McMechen Hall 624</p>
        <p class="full-address">1700 East Cold Spring Lane</p>
        <p class="full-address">Baltimore, Maryland 21251</p>
      </div>
      <div class="contact"></div>
    </div>
  </div>
</template>

<script>
import ProjectCard from "src/components/project-card/project.vue";
import PersonCard from "src/components/people-card/people.vue";
import { projects, people } from "src/data/constants";
export default {
  name: "PageIndex",
  components: {
    ProjectCard,
    PersonCard,
  },

  data() {
    return {
      activeTab: "Home",
      projects: projects,
      people: people,
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
          to: "/publications",
        },
      ],
    };
  },

  computed: {},

  methods: {
    navItemClick(item) {
      if (item.to != "") {
        this.$router.push(item.to);
      } else {
        const element = document.getElementById(item.name.toLowerCase());
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      }
    },
    goToDescription(project) {
      this.$router.push(`/project/${project.slug}`);
    },
    goToConference() {
      const conferenceUrl = "https://dsrl-social-good.vercel.app/";
      window.open(conferenceUrl);
    },
    goToTop() {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    },
  },
};
</script>

<style lang="scss" scoped>
@import "./Index.scss";
</style>
