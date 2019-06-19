ActiveAdmin.register User do
# See permitted parameters documentation:
# https://github.com/activeadmin/activeadmin/blob/master/docs/2-resource-customization.md#setting-up-strong-parameters
#
# permit_params :list, :of, :attributes, :on, :model
#
# or
#
# permit_params do
#   permitted = [:permitted, :attributes]
#   permitted << :other if params[:action] == 'create' && current_user.admin?
#   permitted
# end

	#@users = User.all
	#print @users

	index do
	 
	 column :id
	 column :name
	 column :email
	 column :country
	 column :city
	 column :area
	 column :created_at
	 div class: "row" do
		 div class: "col-12" do
			 panel "Usuarios registrados" do
		      render partial: 'shared/chart1'
		     end
		  end
 	 end
 	 div class: "row" do
		 div class: "col-6" do
			 panel "Distribución local de usuarios countries:ISO_3166-1_alpha-2" do
			  render partial: 'shared/chart2'
			 end
		 end
		 div class: "col-6" do
		     panel "Mapa de usuarios en el mundo" do
		      render partial: 'shared/chart3'
		     end
		 end
	 end
	 panel "Áreas donde se utilizan los datos" do
		render partial: 'shared/chart4'
	 end

	
	end

end
