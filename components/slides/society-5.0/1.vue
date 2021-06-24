<template>
  <div class="slide">
    <SlideHeader
      section="Society 5.0"
      title="Society 5.0"
      subtitle="Quick Recap"
    />
    <SlideContent>
      <div>
        <v-stepper
          v-model="activeStep"
          class="stepper"
        >
          <v-stepper-header>
            <template
              v-for="(step, index) in steps"
            >
              <v-stepper-step
                :key="`step:${index}`"
                :step="index + 1"
              >
                <v-btn text @click="activeStep = index + 1">
                  {{ step }}
                </v-btn>
              </v-stepper-step>
              <v-divider
                v-if="index < steps.length - 1"
                :key="`divider:${index}`"
              />
            </template>
          </v-stepper-header>

          <v-stepper-items>
            <v-stepper-content step="1">
              <div>
                <!--  -->
              </div>
            </v-stepper-content>

            <v-stepper-content step="2">
              <div>
                <!--  -->
              </div>
            </v-stepper-content>

            <v-stepper-content step="3">
              <div>
                <!--  -->
              </div>
            </v-stepper-content>
          </v-stepper-items>
        </v-stepper>
      </div>
    </SlideContent>
  </div>
</template>

<script>
export default {
  data () {
    return {
      steps: [
        '1.0',
        '2.0',
        '3.0',
        '4.0',
      ],
      activeStep: 1,
    }
  },
}
</script>

<style lang="scss" scoped>
.stepper {
  box-shadow: none !important;
}
.stepper::v-deep {

  .v-stepper__header {
    box-shadow: none;
  }
}
</style>
