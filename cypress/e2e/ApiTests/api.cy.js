describe("API TESTS", () => {
  let baseUrl = "http://localhost:5044";

  context("Feature: Login", () => {
    it("Validate Login Successfully", () => {
      cy.request("POST", `${baseUrl}/api/User/login`, {
        username: "testuser",
        password: "password",
      }).then((response) => {
        expect(response.status).to.eq(200);
        expect(response.body).to.have.property("token");
        expect(response.body.token).to.have.eq("sampletoken");
      });
    });
  });

  context("Feature: Product", () => {
    it("Validate create product", () => {
      cy.request("POST", `${baseUrl}/api/product`, {
        id: 1,
        name: "Product N1",
        price: 5,
      }).then((response) => {
        expect(response.status).to.eq(200);
        expect(response.body).to.have.all.keys("id", "name", "price");
        expect(response.body).to.have.property("id", 1);
        expect(response.body).to.have.property("name", "Product N1");
        expect(response.body).to.have.property("price", 5);
      });
    });

    it("Validate read all products", () => {
      cy.request("GET", `${baseUrl}/api/product`).then((response) => {
        expect(response.status).to.eq(200);
        expect(response.body).to.be.an("array");
        expect(response.body.length).to.be.greaterThan(0);
        response.body.forEach((product) => {
          expect(product).to.have.all.keys("id", "name", "price");
        });
      });
    });

    it("Validate read specific product", () => {
      const id = 1;
      let count = 0;
      cy.request("GET", `${baseUrl}/api/product`).then((response) => {
        expect(response.status).to.eq(200);
        expect(response.body).to.be.an("array");
        response.body.forEach((product) => {
          if (product.id === id) {
            expect(product).to.have.all.keys("id", "name", "price");
            count++;
          }
        });
        expect(count).to.eq(1);
      });

      cy.request("GET", `${baseUrl}/api/product/${id}`).then((response) => {
        expect(response.status).to.eq(200);
        expect(response.body).to.have.all.keys("id", "name", "price");
        expect(response.body).to.have.property("id", 1);
        expect(response.body).to.have.property("name", "Product N1");
        expect(response.body).to.have.property("price", 5);
      });
    });

    it("Validate update specific product", () => {
      const id = 1;
      cy.request("PUT", `${baseUrl}/api/product/${id}`, {
        id: 12,
        name: "Product N1 Updated",
        price: 8,
      }).then((response) => {
        expect(response.status).to.eq(200);
      });

      cy.request("GET", `${baseUrl}/api/product/${id}`).then((response) => {
        expect(response.status).to.eq(200);
        expect(response.body).to.have.all.keys("id", "name", "price");
        expect(response.body).to.have.property("id", 12);
        expect(response.body).to.have.property("name", "Product N1 Updated");
        expect(response.body).to.have.property("price", 8);
      });
    });

    it("Validate delete specific product", () => {
      const id = 12;
      cy.request("DELETE", `${baseUrl}/api/product/${id}`).then((response) => {
        expect(response.status).to.eq(200);
      });
    });
  });

  context("Feature: Order", () => {
    it("Validate create Order", () => {
      cy.request("POST", `${baseUrl}/api/order`, {
        id: 1,
        productName: "Product N1",
        quantity: 1,
        status: "Open",
      }).then((response) => {
        expect(response.status).to.eq(200);
        expect(response.body).to.have.all.keys(
          "id",
          "productName",
          "quantity",
          "status"
        );
      });
      cy.request("GET", `${baseUrl}/api/product/${id}`).then((response) => {
        expect(response.status).to.eq(200);
        expect(response.body).to.have.all.keys(
          "id",
          "productName",
          "quantity",
          "status"
        );
        expect(response.body).to.have.property("id", 1);
        expect(response.body).to.have.property("productName", "Product N1");
        expect(response.body).to.have.property("quantity", 1);
        expect(response.body).to.have.property("status", "Open");
      });
    });

    it("Validate read all Orders", () => {
      cy.request("GET", `${baseUrl}/api/order`).then((response) => {
        expect(response.status).to.eq(200);
        expect(response.body).to.be.an("array");
        expect(response.body.length).to.be.greaterThan(0);
        response.body.forEach((product) => {
          expect(product).to.have.all.keys(
            "id",
            "productName",
            "quantity",
            "status"
          );
        });
      });
    });

    it("Validate read specific order", () => {
      const id = 1;
      let count = 0;
      cy.request("GET", `${baseUrl}/api/order`).then((response) => {
        expect(response.status).to.eq(200);
        expect(response.body).to.be.an("array");
        response.body.forEach((order) => {
          if (order.id === id) {
            expect(order).to.have.all.keys(
              "id",
              "productName",
              "quantity",
              "status"
            );
            count++;
          }
        });
        expect(count).to.eq(1);
      });

      cy.request("GET", `${baseUrl}/api/order/${id}`).then((response) => {
        expect(response.status).to.eq(200);
        expect(response.body).to.have.all.keys(
          "id",
          "productName",
          "quantity",
          "status"
        );
        expect(response.body).to.have.property("id", 1);
        expect(response.body).to.have.property("productName", "Product N1");
        expect(response.body).to.have.property("quantity", 1);
        expect(response.body).to.have.property("status", "Open");
      });
    });

    it("Validate update specific order", () => {
      const id = 1;
      cy.request("PUT", `${baseUrl}/api/order/${id}`, {
        id: 1,
        productName: "Order Updated",
        quantity: 5,
        status: "Closed",
      }).then((response) => {
        expect(response.status).to.eq(200);
      });

      cy.request("GET", `${baseUrl}/api/order/${id}`).then((response) => {
        expect(response.status).to.eq(200);
        expect(response.body).to.have.all.keys(
          "id",
          "productName",
          "quantity",
          "status"
        );
        expect(response.body).to.have.property("id", 1);
        expect(response.body).to.have.property("productName", "Order Updated");
        expect(response.body).to.have.property("quantity", 5);
        expect(response.body).to.have.property("status", "Closed");
      });
    });

    it("Validate delete specific order", () => {
      const id = 12;
      cy.request("DELETE", `${baseUrl}/api/order/${id}`).then((response) => {
        expect(response.status).to.eq(200);
      });
    });
  });
});
