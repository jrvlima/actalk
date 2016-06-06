define(["marionette", "views/filesRootView", "collections/filesCollection"],
	function (Marionette, FilesRootView, FilesCollection) {

		var app = new Marionette.Application();

		app.addRegions({
			header: "header",
			main: "main",
			footer: "footer"
		});

		app.on("start", function() {

			filesCollection = new FilesCollection();

			filesCollection.fetch({
				success: function(data) {
					filesRootView = new FilesRootView({
						collection: data
					});

					app.main.show(filesRootView.render());
				}
			})

		});

		return app;
	}
);
