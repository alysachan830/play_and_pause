<template>
  <div class="pa-20 w-100">
    <div class="d-flex align-center">
      <h2 class="font-text lightInfo--text text-uppercase font-xl">Products</h2>
      <v-spacer></v-spacer>
      <v-text-field
        v-model="searchProduct"
        label="Search"
        append-icon="mdi-magnify"
      ></v-text-field>
    </div>
    <v-data-table
      :headers="headers"
      :items="albums"
      :search="searchProduct"
      :items-per-page="15"
      item-key="title"
    >
      <!-- Available edit -->
      <template v-slot:item.available="{ item }">
        <v-switch
          class="switch--small pa-0"
          v-model="item.available"
          :label="`${item.available ? `Yes` : `No`}`"
        ></v-switch>
      </template>
      <!-- Delete  -->
      <template v-slot:item.delete="{ item }">
        <v-icon @click="deleteProduct(item)"> mdi-delete </v-icon>
      </template>
      <!-- Original price edit dialog -->
      <template v-slot:item.originalPrice="props">
        <v-edit-dialog
          :return-value.sync="props.item.originalPrice"
          large
          persistent
          @save="save"
        >
          <span class="mr-2">{{ props.item.originalPrice }}</span>
          <v-icon small class="mr-2"> mdi-pencil </v-icon>
          <template v-slot:input>
            <div class="mt-4 title">Update original price</div>
            <v-text-field
              v-model="props.item.originalPrice"
              type="number"
              label="Edit"
              single-line
              autofocus
            ></v-text-field>
          </template>
        </v-edit-dialog>
      </template>
      <!-- Price edit dialog -->
      <template v-slot:item.price="props">
        <v-edit-dialog
          :return-value.sync="props.item.price"
          large
          persistent
          @save="save"
        >
          <span class="mr-2">{{ props.item.price }}</span>
          <v-icon small class="mr-2"> mdi-pencil </v-icon>
          <template v-slot:input>
            <div class="mt-4 title">Update price</div>
            <v-text-field
              v-model="props.item.price"
              type="number"
              label="Edit"
              single-line
              autofocus
            ></v-text-field>
          </template>
        </v-edit-dialog>
      </template>
      <!-- Category edit dialog -->
      <template v-slot:item.category="props">
        <v-edit-dialog
          :return-value.sync="props.item.category"
          large
          persistent
          @save="save"
        >
          <span class="mr-2">{{ props.item.category }}</span>
          <v-icon small class="mr-2"> mdi-pencil </v-icon>
          <template v-slot:input>
            <div class="mt-4 title">Update category</div>
            <!-- <v-text-field
              v-model="props.item.category"
              label="Edit"
              single-line
              autofocus
            ></v-text-field> -->
            <v-select
              v-model="props.item.category"
              :items="categories"
            ></v-select>
          </template>
        </v-edit-dialog>
      </template>
      <!-- Delete dialog -->
      <template v-slot:top>
        <v-dialog v-model="deleteProductDialog" max-width="500px">
          <v-card>
            <v-card-title class="headline">
              Are you sure you want to delete <br />
              <span class="font-weight-bold">{{ deleteProductTitle }}</span> ?
            </v-card-title>
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn color="blue darken-1" text @click="closeDelete"
                >Cancel</v-btn
              >
              <v-btn color="blue darken-1" text @click="deleteProductConfirm"
                >OK</v-btn
              >
              <v-spacer></v-spacer>
            </v-card-actions>
          </v-card>
        </v-dialog>
      </template>
    </v-data-table>
    <!-- The snackbar to be shown after saving the edited data -->
    <v-snackbar
      class="darkInfo--text"
      v-model="snack"
      :timeout="1500"
      :color="snackColor"
    >
      {{ snackText }}
    </v-snackbar>
  </div>
</template>

<script>
import moment from "moment";
export default {
  data() {
    return {
      editedIndex: null,
      searchProduct: "",
      searchBar: "",
      headers: [
        {
          text: "albumId",
          value: "albumId",
          class: "text-uppercase",
          sortable: false,
        },
        {
          text: "type",
          value: "type",
          class: "text-uppercase",
          sortable: false,
        },
        {
          text: "title",
          value: "title",
          class: "text-uppercase",
          sortable: false,
        },
        {
          text: "artist",
          value: "artist",
          class: "text-uppercase",
          sortable: false,
        },
        {
          text: "original price",
          value: "originalPrice",
          class: "text-uppercase",
          sortable: true,
        },
        {
          text: "price",
          value: "price",
          class: "text-uppercase",
          sortable: true,
        },
        {
          text: "category",
          value: "category",
          class: "text-uppercase",
          sortable: false,
        },
        {
          text: "genre",
          value: "genre",
          class: "text-uppercase",
          sortable: false,
        },
        {
          text: "date",
          value: "date",
          class: "text-uppercase",
          sortable: true,
        },
        {
          text: "available",
          value: "available",
          class: "text-uppercase",
          sortable: false,
        },
        {
          text: "delete",
          value: "delete",
          class: "text-uppercase",
          sortable: false,
        },
      ],
      categories: ["bestseller", "new release", "regular item"],
      deleteProductDialog: false,
      deleteProductTitle: "",
      snack: false,
      snackColor: "",
      snackText: "",
      albums: [],
    };
  },
  mounted() {
    const albumData = {
      albumId: `${moment().valueOf()}`,
      type: "album",
      title: "Demo album title",
      artist: "Billie Eilish",
      originalPrice: 150,
      price: 100,
      category: "bestseller",
      genre: "pop",
      date: "16-05-2021",
      available: true,
    };
    // Fake data
    const changeTitle = (item, index) => {
      const newData = { ...item };
      newData.title = `${newData.title} ${index}`;
      return newData;
    };
    for (let i = 0; i < 30; i++) {
      this.albums.push(changeTitle(albumData, i));
    }
  },

  methods: {
    deleteProduct(item) {
      this.editedIndex = this.albums.indexOf(item);
      this.deleteProductDialog = true;
      // this.deleteConfirmText = `Are you sure you want to delete ${item.title} item?`;
      this.deleteProductTitle = item.title;
    },
    deleteProductConfirm() {
      this.albums.splice(this.editedIndex, 1);
      this.closeDelete();
    },
    closeDelete() {
      this.deleteProductDialog = false;
      this.editedIndex = null;
    },
    save() {
      this.snack = true;
      this.snackColor = "primary";
      this.snackText = "Data saved";
    },
  },
};
</script>

<style lang="scss" scoped>
::v-deep {
  .available {
    &--true {
      color: $primary;
    }
    &--false {
      color: $danger;
    }
  }

  .v-snack__content {
    color: $dark-info;
  }
}

.switch--small {
  transform: scale(0.9);
}
</style>
