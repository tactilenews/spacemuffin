<template>
  <font-awesome-icon :icon="icon" />
</template>

<script>
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import {
  faChevronRight,
  faChevronLeft,
  faCheck,
  faPlus
} from '@fortawesome/free-solid-svg-icons'

library.add(faChevronRight, faChevronLeft, faCheck, faPlus)

export default {
  components: {
    FontAwesomeIcon
  },
  props: {
    icon: {
      type: String,
      default: null
    }
  }
}
</script>
